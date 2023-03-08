import Select from "react-select";
const FormInput = ({ label, type, onChange, value, required, children }) => {
  return (
    <label className="block my-6 mx-auto">
      <span className="block mb-6">{label}</span>
      {children}
      <input
        className="w-full py-3 px-2 text-base"
        required={required}
        type={type}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
export default FormInput;
