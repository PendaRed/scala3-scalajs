import sbt._
// To allow %%% for scala.js dependencies
import org.scalajs.sbtplugin.ScalaJSPlugin.autoImport._

object Dependencies {
  val ScalaTestVersion = "3.2.9"
  val ScalaLoggingVersion = "3.9.4"
  val LogbackVersion = "1.2.3"
  val CirceVersion="0.15.0-M1"

  val commonSettingsDependencies = Seq(
    "org.scalatest" % "scalatest_3" % ScalaTestVersion % Test,
  )

  val circeDepenencies = Seq(
    "io.circe" %% "circe-core",
    "io.circe" %% "circe-generic",
    "io.circe" %% "circe-parser"
  ).map(_ % CirceVersion)

  val gcpDependencies = Seq(
    "com.typesafe.scala-logging" % "scala-logging_3" % ScalaLoggingVersion,
    "ch.qos.logback" % "logback-classic" % LogbackVersion,

    // Every function needs this dependency to get the Functions Framework API.
    "com.google.cloud.functions" % "functions-framework-api" % "1.0.1",

    // To run function locally using Functions Framework's local invoker
    "com.google.cloud.functions.invoker" % "java-function-invoker" % "1.0.0-alpha-2-rc5" % Test,
  ) ++ commonSettingsDependencies ++ circeDepenencies

  val sharedDependencies = Seq(

  ) ++ commonSettingsDependencies
}