const Input = ({ value, onChange, placeholder, type, register, id }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...register(id)}
      className="bg-white border-2 border-stone-300 rounded-sm p-3 focus:outline-none"
    />
  );
};

export default Input;
