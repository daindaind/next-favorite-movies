const Input = ({ value, onChange, placeholder, type, register = () => {}, id }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...register(id)}
      className="w-full bg-white border-2 border-stone-200 rounded-lg p-2 text-sm focus:outline-none"
    />
  );
};

export default Input;
