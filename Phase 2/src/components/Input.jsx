function Input({ varient, placeholder, label, handleChange }) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        onChange={handleChange}
        className={` text-black px-4 py-2 rounded-lg ${varient == "primary" ? "bg-zinc-200 " : "border boder-black "}`}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
