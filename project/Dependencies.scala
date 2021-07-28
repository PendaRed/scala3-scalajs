import sbt._
// To allow %%% for scala.js dependencies
import org.scalajs.sbtplugin.ScalaJSPlugin.autoImport._

object Dependencies {
  val ScalaTestVersion = "3.2.9"

  val commonSettingsDependencies = Seq(
    "org.scalatest" % "scalatest_3" % ScalaTestVersion % Test,
  )

  val gcpDependencies = Seq(
    // Every function needs this dependency to get the Functions Framework API.
    "com.google.cloud.functions" % "functions-framework-api" % "1.0.1",

    // To run function locally using Functions Framework's local invoker
    "com.google.cloud.functions.invoker" % "java-function-invoker" % "1.0.0-alpha-2-rc5" % Test,
  ) ++ commonSettingsDependencies

  val sharedDependencies = Seq(

  ) ++ commonSettingsDependencies
}