import logo from './logo.svg';
import './App.css';
import {namegen} from './scalajs/randomName'

function App() {
  return (
    <div className="App">
      {namegen()}
    </div>
  );
}

export default App;
