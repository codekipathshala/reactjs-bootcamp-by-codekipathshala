import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function HeroSection() {
  
  let [input,setInput] = useState(null);
  let [email,setEmail] = useState(null);

  let [data,setData] = useState({
    name : '',
    email : '',
    password : ''
  })


  function handleProjects() {
    alert("Btn Clicked - EXPLORE PROJECTS");
  }

  function handleContact() {
    alert("Btn Clicked - CONTACT US");
  }

  function handleInput(e) {
    let name= e.target.name;
    let value = e.target.value;
    // console.log({...data,[name]})
    setData({...data,[name]:value})
  }

  function handleSubmit(e){
    e.preventDefault();
    // alert("Form submitted")

    // let formData = {
    //   name : input,
    //   email,
    // }
    console.log(data)

  }


  function anotherInputHandler(e){
    console.log("another input",e.target.value);
    setInput(e.target.value)
  }

  return (
    <section className="w-full h-[80vh] gap-4 flex flex-col items-center justify-center ">
      <h1 className="text-7xl tracking-tighter text-center">
        We Build Digital Products <br /> That Drive Growth.
      </h1>
      <p className="text-center text-lg">
        From startups to global brands — we design, develop, and deliver <br />
        high-performing web and mobile solutions that turn ideas into impact.
      </p>
      <div className="flex gap-4 mt-4">
        <Button text={"EXPLORE PROJECTS"} handleClick={handleProjects} />
        <Button
          text={"CONTACT US"}
          varient={"ouline"}
          handleClick={handleContact}
        />
      </div>
      {/* <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleInput}
          varient={"primary"}
          placeholder={"Enter your name"}
          label={"name"}
          value={data.name}
        />
        <Input
          handleChange={handleInput}
          varient={"outline"}
          placeholder={"Enter your email"}
          label={"email"}
          value={data.email}
        />
        <input className='m-32' name='password' value={data.password} onChange={handleInput} type="text" placeholder="this is another input feild" />
        <button type='submit'>Submit</button>
      </form> */}
    </section>
  );
}

export default HeroSection;
