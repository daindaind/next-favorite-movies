const Button = ({ label, onClick, type }) => {
  return (
    <button
      className="p-3 bg-cherry-pink border-none rounded transition ease-in delay-75 hover:cursor-pointer scale-50"
      onClick={onClick}
      type={type}
    >
      <p className="text-light-white text-sm">{label}</p>
    </button>
  );
};

export default Button;
