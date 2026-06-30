function Button({ text, varient = "primary", handleClick }) {
  console.log(varient);

  // function handleClick(){
  //   alert('Button Clicked - GET STARTED')
  // };

  return (
    <button onClick={handleClick}
      className={`${varient == 'primary' ? "bg-black text-white" : "border border-black text-black" }  px-7 py-4 font-medium text-sm rounded-full `}
    >
      {text}
    </button>
  );
}

export default Button;
