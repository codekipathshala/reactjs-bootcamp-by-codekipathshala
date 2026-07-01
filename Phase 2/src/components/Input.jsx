function Input({ varient, placeholder, label, handleChange,value }) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input

        onChange={handleChange}
        name={label}
        className={` text-black px-4 py-2 rounded-lg ${varient == "primary" ? "bg-zinc-200 " : "border boder-black "}`}
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
