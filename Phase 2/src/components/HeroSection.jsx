import Button from "./Button";
import Input from "./Input";

function HeroSection() {
  function handleProjects() {
    alert("Btn Clicked - EXPLORE PROJECTS");
  }

  function handleContact() {
    alert("Btn Clicked - CONTACT US");
  }

  function handleInput(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Form submitted")

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
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleInput}
          varient={"primary"}
          placeholder={"Enter your name"}
        />
        <Input
          handleChange={handleInput}
          varient={"outline"}
          placeholder={"Enter your email"}
          label={"email"}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default HeroSection;
