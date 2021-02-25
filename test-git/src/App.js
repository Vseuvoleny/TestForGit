
import './App.css';
import {Name} from './name/name'
import {State} from './state/state'
import {Private} from './private/private'
function App() {
  return (
    <div className="App">
       Hello!!
       <p>My name is Arthur</p>
       <Name/>
       <State/>
       <Private/>
    </div>
  );
}

export default App;
