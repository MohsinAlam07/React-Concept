import './App.css'
import Counter from './Counter';
import Players from './Players';

function App() {
 
  function handleClick(){
    alert('Hi,Napa!');
  }
  return (
    <>
     
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me!</button>
      <Counter></Counter>
      <Players></Players>
      
     
    </>
  )
}

export default App
