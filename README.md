## Scala 3, ScalaJS project

With npm and react, sbt scala 3, scalaJS and IntelliJ.

## To run it

Open two command prompts, the first will monitor the scala files and will write the generated
javascript into the node/npm based reactapp.
<pre>
cd client-js
sbt ~clientJs/fastLinkJS
</pre>

and in the other is for the reactapp, which monitors the javascript and regenerates the site so you 
can run a live webpage that updates on every edit.
<pre>
cd reactapp
npm start
</pre>

## Thats it!
nearly, I'll cover the build for release later.

## To initialise your own 

To get the reactapp off the ground do:
<pre>
cd project
npm init react-app ./reactapp
cd reactapp
npm start
</pre>
also add an eslint file
