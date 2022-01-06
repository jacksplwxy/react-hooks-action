import './App.css';
import ClassComp1 from './components/useState/ClassComp'
import FuncComp1 from './components/useState/FuncComp'
import ClassComp2 from './components/useEffect/ClassComp'
import FuncComp2 from './components/useEffect/FuncComp'
import ClassComp3 from './components/useReducer/ClassComp'
import FuncComp3 from './components/useReducer/FuncComp'

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <ClassComp1></ClassComp1>
      <FuncComp1></FuncComp1>
      <hr></hr>

      <h1>useEffect</h1>
      <ClassComp2></ClassComp2>
      <FuncComp2></FuncComp2>
      <hr></hr>

      <h1>useReducer</h1>
      <ClassComp3></ClassComp3>
      <FuncComp3></FuncComp3>
      <hr></hr>

      
    </div>
  );
}

export default App;
