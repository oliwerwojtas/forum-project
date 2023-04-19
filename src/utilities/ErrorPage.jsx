const ErrorPage = ({ message }) => {
  return (
    <div>
      <p className="text-red-500 mt-4">{message}</p>
    </div>
  );
};
export default ErrorPage;
