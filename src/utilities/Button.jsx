const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
