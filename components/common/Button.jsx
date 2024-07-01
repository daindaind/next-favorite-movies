const Button = ({ label, onClick, type }) => {
  return (
    <button
      className="p-2 bg-cherry-pink border-none rounded-md transition ease-in delay-75 hover:cursor-pointer hover:scale-90 transform-gpu"
      onClick={onClick}
      type={type}
    >
      <p className="text-light-white text-sm">{label}</p>
    </button>
  );
};

export default Button;
