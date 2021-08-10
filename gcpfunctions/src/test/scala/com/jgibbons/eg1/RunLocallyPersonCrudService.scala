package com.jgibbons.eg1

// https://cloud.google.com/functions/docs/first-java#gradle
@main def RunLocallyPersonCrudService : Unit =
  println(s"Test Runner for HelloWorldScala3")
  com.google.cloud.functions.invoker.runner.Invoker.main(Array("--target", classOf[PersonCrudService].getName))

