import './App.css';
import {namegen} from './scalajs/randomName'
import {handleUserInput} from './scalajs/UsingSharedCode'
import {PersonContextProvider} from "./components/person/PersonContext";
import {DisplayPeople} from "./components/person/DisplayPeople";

const callSomeScala  = () => {
    const h = handleUserInput("first", "last", "f.l@gmail.com");
    return h;
}

function App() {
    return (
        <div className="App">
            A random name from Scala : {namegen()}
            <br/>
            A person validated and displayed using the shared coss compiled project: {callSomeScala()}
            <PersonContextProvider>
                <DisplayPeople/>
            </PersonContextProvider>
        </div>
);
}

export default App;
