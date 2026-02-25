import { useState } from "react"

export default function Players(){
    const[runs,setRuns] = useState(0);
    const [sixes,SetSixes]=useState(0);
    const [fours,SetFours]=useState(0);
    const handleSingles =()=>{
        const newRuns=runs+1;
        setRuns(newRuns);
    }
    const handleTwo =()=>{
        const newRuns=runs+2;
        setRuns(newRuns);
    }
 const handleThree =()=>{
        const newRuns=runs+3;
        setRuns(newRuns);
    }
    const handleFour =()=>{
        const newRuns=runs+4;
        const updateFours=fours+1;
        SetFours(updateFours);
        setRuns(newRuns);
    }

    const handleSix =()=>{
        const newRuns=runs+6;
       const updateSixes=sixes+1;
        SetSixes(updateSixes);
        setRuns(newRuns);
    }


    return(
        <div>
            <h1>Bangladeshi Players:</h1>
            {
                runs>50 && <h3>You Score is half Century</h3>
            }
            <p>Runs : {runs}</p>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleTwo}>Two</button>
            <button onClick={handleThree}>Three</button>
            <button onClick={handleFour}>four : {fours}</button>
            <button onClick={handleSix}>Six : {sixes}</button>
        </div>

    )
}