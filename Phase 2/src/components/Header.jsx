import Button from "./Button";

function Header() {


  function clickHandler(){
    alert('Button Clicked - GET STARTED')
  }



  return (
    <header className="w-full max-w-[1200px] py-6 mx-auto flex items-center justify-between">
      <img
        src="https://nexstudio.demos.tailgrids.com/images/layout/logo-black.svg"
        alt="logo"
      />
      <nav className="flex gap-4">
        <a>PROJECTS</a>
        <a>ABOUT</a>
        <a>SERVICE</a>
        <a>BLOG</a>
      </nav>
      <Button text={'GET STARTED'} handleClick={clickHandler}/>
    </header>
  );
}

export default Header;
