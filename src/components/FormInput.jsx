const FormInput = ({ label, type, onChange, value, required, children }) => {
  return (
    <label>
      <span className="block mb-6">{label}</span>
      {children}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
        required={required}
        type={type}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
export default FormInput;
