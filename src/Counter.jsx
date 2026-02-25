import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0);
    const handleAdd =()=>{
       const newCount=count+2;
       setCount(newCount);

    }
    const counterStyle={
        border:'1px solid red'
    }
    return(
        <div style={counterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}