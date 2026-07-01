import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  let [data, setData] = useState(0);
  let [isLoading,setIsLoading] = useState(false)
  let [isSubscribed,setIsSubscribed] = useState(false);
//   let [users,setUsers] = useState([
//   {
//     name: "Amit Sharma",
//     age: 24,
//     address: "Delhi",
//     phoneNumber: "9876543210"
//   },
//   {
//     name: "Priya Singh",
//     age: 28,
//     address: "Mumbai",
//     phoneNumber: "9123456780"
//   },
//   {
//     name: "Rahul Verma",
//     age: 31,
//     address: "Lucknow",
//     phoneNumber: "9988776655"
//   },
//   {
//     name: "Neha Gupta",
//     age: 22,
//     address: "Jaipur",
//     phoneNumber: "9871234567"
//   },
//   {
//     name: "Arjun Mehta",
//     age: 35,
//     address: "Pune",
//     phoneNumber: "9765432109"
//   },
//   {
//     name: "Sneha Kapoor",
//     age: 27,
//     address: "Chandigarh",
//     phoneNumber: "9012345678"
//   },
//   {
//     name: "Rohan Das",
//     age: 30,
//     address: "Kolkata",
//     phoneNumber: "9090909090"
//   },
//   {
//     name: "Anjali Mishra",
//     age: 26,
//     address: "Bhopal",
//     phoneNumber: "9345678901"
//   },
//   {
//     name: "Vikas Yadav",
//     age: 29,
//     address: "Patna",
//     phoneNumber: "9456781234"
//   },
//   {
//     name: "Kavya Nair",
//     age: 23,
//     address: "Bengaluru",
//     phoneNumber: "9887654321"
//   }
// ])

let [users,setUsers] = useState([])

  function changeState(){
    setData(function(prev){
      return prev+1
    })
  };



  function handleSubscribe(){
    setData(data+3)
    setIsSubscribed(!isSubscribed);
  }

  if(isLoading){
    return <p>Loading......</p>
  }

  return (
    <div>
      <Header />
      <HeroSection />
      {/* <h1 className="text-3xl p-4 font-semibold">{data}</h1>
      <Button text={'Increase Count'} varient={'outline'} handleClick={changeState}/>
      <Button text={isSubscribed ? "Thank You" : "Subscribe to Code Ki Pathshala"} handleClick={handleSubscribe}/> */}
      <div className="grid grid-cols-4 gap-4 p-8">
      
        {users.length == 0 ? <p>No users found.</p> : users.map(function(user,idx,array){
          return <Card key={idx} data={user}/>
        })}
      </div>

      <h1 className='text-5xl p-8 font-bold'>
        {/* {condition ? "" : ""} */}
        {isSubscribed ? "Thankyou for subscribing!" : "Please subscribe to Code ki Pathshala"}
        { !isSubscribed && <Button text={'Subscribe'} handleClick={()=>{setIsSubscribed(!isSubscribed)}}/>}
      </h1>
    </div>
  );
}

export default App;

// Hooks : ReactJs k pass bhot saare by default funtions hote hai jo phele se hi bane hue hote hai ..jisko hm loh kehte hai Hooks

// iske phehchan ye hai ki vo use word se start hota hai - useState,useEffect, useRef

// UseState = data => programming hm logo k pass bhot data hota  hai usko store krne k liye hme ek jagah chaiye hoti hai to uss jaga ya uss memory k liye reactjs me hm log useState ka use krte hai...

// aisa data jisko mujhe apne UI me ya screen me show krvana hoga uss data ko me useState k andar store krunga aur incase aisa koi jiska logic se koi relation ya jisko mujhe screeen par nahi show krvana hai aur jiski value bhi update nahi hogi aisi chizz ko me apne variables k andar store krva skta hu

// jo bhi data useState k andar store hota incase agar vo data update hota hai to vo jis bhi component k andar bana hoga vo component re-render hota hai...
