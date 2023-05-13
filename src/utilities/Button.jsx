import { motion } from "framer-motion";
const Button = ({ text, className, onClick, key, whileHover, whileTap }) => {
  return (
    <motion.button
      className={`bg-[#484b6a] hover:bg-[#2c2f4e] text-white font-bold py-2 px-4 rounded ${className}`}
      type="submit"
      onClick={onClick}
      key={key}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {text}
    </motion.button>
  );
};

export default Button;
