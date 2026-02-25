import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Players from './Players';
import Users from './Users';
import Friends from './Friends';
const fetchUser=fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

const fetchFriends=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

function App() {
  const friendsPromise=fetchFriends();
 
  function handleClick(){
    alert('Hi,Napa!');
  }
  return (
    <>
     
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me!</button>
      <Suspense fallback={ <h3>Loading...</h3> }>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friedns are coming for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>
      <Counter></Counter>
      <Players></Players>
      
     
    </>
  )
}

export default App
