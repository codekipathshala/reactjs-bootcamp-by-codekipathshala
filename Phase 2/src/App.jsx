import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Button from "./components/Button";

function App() {
  let [data, setData] = useState(0);
  let [isSubscribed,setIsSubscribed] = useState(false);

  function changeState(){
    setData(function(prev){
      return prev+1
    })
  };



  function handleSubscribe(){
    setData(data+3)
    setIsSubscribed(!isSubscribed);
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <h1 className="text-3xl p-4 font-semibold">{data}</h1>
      <Button text={'Increase Count'} varient={'outline'} handleClick={changeState}/>
      <Button text={isSubscribed ? "Thank You" : "Subscribe to Code Ki Pathshala"} handleClick={handleSubscribe}/>
    </div>
  );
}

export default App;

// Hooks : ReactJs k pass bhot saare by default funtions hote hai jo phele se hi bane hue hote hai ..jisko hm loh kehte hai Hooks

// iske phehchan ye hai ki vo use word se start hota hai - useState,useEffect, useRef

// UseState = data => programming hm logo k pass bhot data hota  hai usko store krne k liye hme ek jagah chaiye hoti hai to uss jaga ya uss memory k liye reactjs me hm log useState ka use krte hai...

// aisa data jisko mujhe apne UI me ya screen me show krvana hoga uss data ko me useState k andar store krunga aur incase aisa koi jiska logic se koi relation ya jisko mujhe screeen par nahi show krvana hai aur jiski value bhi update nahi hogi aisi chizz ko me apne variables k andar store krva skta hu

// jo bhi data useState k andar store hota incase agar vo data update hota hai to vo jis bhi component k andar bana hoga vo component re-render hota hai...
