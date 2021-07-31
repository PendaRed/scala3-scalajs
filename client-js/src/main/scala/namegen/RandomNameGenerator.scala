package namegen

import scala.scalajs.js.annotation._

object RandomNameGenerator :
  private val first = List(
    "jon", "ton", "sar", "fly", "tom", "geo", "hen", "emi",
    "ali", "ell", "greg"
  )
  private val mid = List(
    "at", "ist", "or"
  )
  private val last = List(
    "hon", "y", "ah", "nne", "as", "rge", "ry", "ly",
    "air", "iot", "y"
  )
  private val rnd = new java.util.Random(10)
  private def rndInt(max:Int) = (rnd.nextDouble()*max).toInt
  private def str(s:List[String]) = s(rndInt(s.length))

  @JSExportTopLevel(name = "namegen", moduleID = "randomName")
  def randomName(): String =
    s"${str(first)}${if (rnd.nextDouble()<0.21)str(mid)else""}${str(last)}"
