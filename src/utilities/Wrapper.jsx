const Wrapper = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded w-96 h-96 px-8 pt-6 pb-8 mb-4">{children}</div>
    </div>
  );
};

export default Wrapper;
