package com.jgibbons.eg1

import com.google.cloud.functions.{HttpFunction, HttpRequest, HttpResponse}
import com.typesafe.scalalogging.LazyLogging

import java.io.{BufferedReader, BufferedWriter, IOException}
import java.net.HttpURLConnection

// Deals with html, tony layer to decouple the scala from the gcp functions
class PersonCrudService extends HttpFunction with LazyLogging :
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  val StatusOk = 200
  val StatusInternalServerError = 500

  private def handleErr(debug:String, err:String) : Tuple2[Int, Option[String]]=
    logger.warn(s"POST to $debug person failed [$err]")
    (StatusInternalServerError, None)

  private def statusFrom(debug: String, res:Either[String,Unit]) = res match {
      case r:Right[String,Unit] => (StatusOk, None)
      case Left(err) => handleErr(debug,err)
  }

  /**
   * https://cloud.google.com/functions/docs/writing/http
   */
  private def handleCors(request: HttpRequest, response: HttpResponse) :Boolean = {
    // Set CORS headers
    //   Allows GETs from any origin with the Content-Type
    //   header and caches preflight response for 3600s
    response.appendHeader("Access-Control-Allow-Origin", "*")

    if ("OPTIONS" == request.getMethod) {
      response.appendHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
      response.appendHeader("Access-Control-Allow-Headers", "Content-Type")
      response.appendHeader("Access-Control-Max-Age", "3600")
      response.setStatusCode(HttpURLConnection.HTTP_NO_CONTENT)
      true
    } else false
  }

  override def service(request: HttpRequest, response: HttpResponse) =
    if (handleCors(request, response)) return
    else {
      val (code: Int, retBody: Option[String]) = request.getMethod match {
        case m@"POST" => statusFrom(m, PersonCrudHandler.handleCreate(body(request)))
        case "GET" => (StatusOk, Some(PersonCrudHandler.handleRead()))
        case m@"PUT" => statusFrom(m, PersonCrudHandler.handleUpdate(body(request)))
        case m@"DELETE" => statusFrom(m, PersonCrudHandler.handleDelete(body(request)))
        case m@_ =>
          logger.info(s"Unkown Http method [$m]")
          (StatusInternalServerError, None)
      }
      response.setStatusCode(code)
      retBody.foreach { s =>
        val writer = response.getWriter()
        writer.write(s)
        writer.flush()
      }
    }

  private def body(request:HttpRequest) =
    def read(s:StringBuilder, r:BufferedReader) :String =
      r.readLine() match {
        case null=> s.toString
        case l => read(s.append(l+"\n"),r)
      }
    read(StringBuilder(), request.getReader)
