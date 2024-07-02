const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="w-full bg-white border-2 border-stone-200 rounded-lg p-2 text-sm focus:outline-none"
    />
  );
};

export default Input;
