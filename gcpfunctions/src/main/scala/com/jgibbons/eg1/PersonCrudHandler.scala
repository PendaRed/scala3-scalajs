package com.jgibbons.eg1

import com.jgibbons.eg1.dto.{PersonDto,PeopleRespDto}
import com.jgibbons.eg1.logic.PersonValidator.*
import io.circe.*
import io.circe.generic.semiauto.*
import io.circe.parser.decode
import io.circe.syntax.*

import scala.util.Try

// Deals with errors, json encodings and so on
object PersonCrudHandler {
  implicit val personDecoder: Decoder[PersonDto] = deriveDecoder
  implicit val personEncoder: Encoder[PersonDto] = deriveEncoder
  implicit val peopleEncoder: Encoder[PeopleRespDto] = deriveEncoder

  private[eg1] def decodeBody(s:String) :PersonDto =
    decode[PersonDto](s) match
      case Right(p) if p.validate => p
      case Right(p) => throw new Exception("Invalid Person, missing data.")
      case Left(ex) => throw ex

  def handleCreate(body:String) : Either[String, Unit] =
    PersonDb.create(decodeBody(body)) match
      case n if (n==1) => Right(())
      case n => Left(s"Unexpected create row count [$n]")

  def handleRead():String =
    val json : Json = PeopleRespDto(PersonDb.read()).asJson
    json.spaces2

  def handleUpdate(body:String)  : Either[String, Unit] =
    PersonDb.update(decodeBody(body)) match
      case n if (n==1) => Right(())
      case n => Left(s"Unexpected update row count [$n]")

  def handleDelete(body:String) =
    PersonDb.delete(decodeBody(body)) match
      case n if (n==1) => Right(())
      case n => Left(s"Unexpected delete row count [$n]")
}
