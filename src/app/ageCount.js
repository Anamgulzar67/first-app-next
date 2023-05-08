import { useState } from "react"
export default function AgeCount(){
 
    const[age,setAge]=useState("");
 const [convertedAge,setCovertedAge]=useState("");

 function convertAge(){
    if(!age){
      alert('Please enter the Age');
    }else{
        const currentYear=new Date(Date.now());
        const convertedVal=currentYear.getFullYear()-age;
        setCovertedAge(convertedVal)
    }
 }
 return(
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
     <label>Enter your Birth Year:</label>
    <input
    onChange={(e)=>setAge(e.target.value)}
    value={age}
    className="border border-1"
    type="number"
    id="birthYear"
    name="birthYear"
    />
    <button className="py-2 px-5 bg-blue-600 rounded" onClick={convertAge}>convert the age</button>
    <p>converted Age:{convertedAge}</p>
    </div>
 )
}