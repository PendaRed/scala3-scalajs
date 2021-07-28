package com.jgibbons.eg1
import org.scalajs.dom
import org.scalajs.dom.document

def appendPar(targetNode: dom.Node, text: String): Unit = {
  val parNode = document.createElement("p")
  parNode.textContent = text
  targetNode.appendChild(parNode)
}

@main def Hello =
  appendPar(document.body, "Hello World again")
