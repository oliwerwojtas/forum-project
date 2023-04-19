const Button = ({ text, className, onClick, key }) => {
  return (
    <button
      className={`bg-[#484b6a] hover:bg-[#2c2f4e] text-white font-bold py-2 px-4 rounded ${className}`}
      type="submit"
      onClick={onClick}
      key={key}
    >
      {text}
    </button>
  );
};

export default Button;
