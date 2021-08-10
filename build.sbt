ThisBuild / scalaVersion := "3.0.0"
ThisBuild / organization := "com.jgibbons"


// Cross compiling for jvm or js.
// http://www.scala-js.org/doc/project/cross-build.html
lazy val shared = crossProject(JSPlatform, JVMPlatform).in(file("shared"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "shared",
    version := "0.1-SNAPSHOT",
    libraryDependencies ++= Dependencies.sharedDependencies
  )
  .jvmSettings(
    // Add JVM-specific settings here
    // Need the stub so the export to js annotation works
    libraryDependencies += "org.scala-js" % "scalajs-stubs_2.13" % "1.0.0" % "provided",
  )
  .jsSettings(
    // Add JS-specific settings here
    scalaJSUseMainModuleInitializer := true,
  )

lazy val gcpFunctions = (project in file("gcpfunctions"))
  .settings(
    name := "gcp-functions",
  	libraryDependencies ++= Dependencies.gcpDependencies
  ) dependsOn(shared.jvm)


// example: https://github.com/ochrons/scalajs-spa-tutorial/blob/master/build.sbt
lazy val clientJs = (project in file("client-js"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "client-js",
    // This is an application with a main method
    //scalaJSUseMainModuleInitializer := true,
    //mainClass := Some("com.jgibbons.eg1.Hello"),
    // No scala 3 version in maven central yet, so dont use %%%
    libraryDependencies += "org.scala-js" % "scalajs-dom_sjs1_2.13" % "1.1.0",
    // ECMAScript
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
    // CommonJS
    //scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
    Compile / fastLinkJS / scalaJSLinkerOutputDirectory := new File( baseDirectory.value, "../reactapp/src/scalajs"),
  ) dependsOn(shared.js)
  
lazy val scala3scalaJS = (project in file("."))
  .aggregate(shared.js, shared.jvm, gcpFunctions, clientJs)
  
