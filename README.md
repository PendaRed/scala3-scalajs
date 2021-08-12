## Scala 3, ScalaJS project

With npm and react, sbt, scala 3, scalaJS and IntelliJ.

## To run it

Open two command prompts, the first will monitor the scala files and will write the generated
javascript into the node/npm based reactapp.
<pre>
sbt ~clientJs/fastLinkJS
</pre>

and in the other is for the reactapp, which monitors the javascript and regenerates the site so you 
can run a live webpage that updates on every edit.
<pre>
cd reactapp
npm start
</pre>

The shared project has trivial stuff in it, but using sbt dependencies the .js or .jvm
cross compiled code is imported correctly.

## Start the server

This code uses the GCP functions local runner, so open up the file RunLocallyPersonCrudService.scala
and click on the green arrow (in intellij) to run it.

This file is in the test source for gcpfunctions.

## To initialise your own 

To get the reactapp off the ground do:
<pre>
cd project
npm init react-app ./reactapp
cd reactapp
npm start
</pre>
also add an eslint file

## What does the project do?

The reactapp uses a reacthooks context and reducer, it also uses axios to
invoke a gcp function (which supports cors), to return a list of data.

The page invokes a scalajs function in the browser to generate a name.
It also invokes a function in the shared project to show the cross compiler 
and the scalajs depends on is working.

The page finally uses ag-grid as a react component to display the list of people
returned from the server.

This is typically the full functionality I need in my apps - ie local logic, server logic
and interaction between them.  So, I've proven the tech stack.

## Why?
In August 2021 I want to ditch Typescript and use scala frint and back.

I also want some decent UI components, which means ReactHooks, javascript, sass and axios
in the UI.

The UI code does display and rerender based upon react hooks.

As soon as there is complex logic the javascript will hand off to scalajs which
will have scala unit tests.

## Is it any good?
If you know scala, yes.  No need to have typescript anywhere!  

The downside is that the Chrome debugger for stepping through the scalajs is of
less value, as the generated javascript is had to read.  But given its scala originally you should have loads of unit tests.

## Other options?
Well, I am deploying jvm based gcp functions using the google cloud cli, and hosting the site using firebase.
I even use the firebase emulator for the app....so I could if I wanted to compile the gcpfunctions into javascript too, 
which means firebase could deploy them.   But I don't like that, because I want to keep on the JVM for the server side
stuff.

## Project structure

This is an sbt multi-project.  

### clientjs 
This holds scala code which is deployed using the scalajs commands into the react app,
into a generated code directory called reactapp/src/scalajs.

### reactapp
I open this project in another intellij.  This is a normal node project
holding javascript and the generated scalajs modules.

### gcpfunctions
Scala code which has a rest API for CRUD.  It also has a local runner so you
can run the service on your PC - this lives in the test project as it is not deployed to GCP.

### shared
This is a cross compiled project for code that could be shared on the UI or the server.
I did this just to see how it works.

## Finally

If you love Scala 3 this proves that you can ignore typescript and deliver a project.
Good luck, have fun.

Jonathan