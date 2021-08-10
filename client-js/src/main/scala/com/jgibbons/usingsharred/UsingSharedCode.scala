package com.jgibbons.usingsharred

import com.jgibbons.eg1.dto.PersonDto
import com.jgibbons.eg1.logic.PersonValidator.*

import scala.scalajs.js.annotation.JSExportTopLevel

object UsingSharedCode {
  @JSExportTopLevel(name = "handleUserInput", moduleID = "UsingSharedCode")
  def handleUserInput(fname:String, sname:String, email:String): String = {
    val p = new PersonDto(fname, sname, email)
    val r = if (p.validate) Right(p) else Left("Please enter the correct details")
    r.toString
  }
}
