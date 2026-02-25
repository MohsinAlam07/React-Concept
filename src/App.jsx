import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Players from './Players';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
const fetchUser=fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())

const fetchFriends=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}
const fetchPosts=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}
function App() {
  const friendsPromise=fetchFriends();
  const postsPromise=fetchPosts();
 
  function handleClick(){
    alert('Hi,Napa!');
  }
  return (
    <>
     
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me!</button>
      <Suspense fallback={<h2>Post are coming...</h2>}>
      <Posts postsPromise={postsPromise}></Posts>

      </Suspense>
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
