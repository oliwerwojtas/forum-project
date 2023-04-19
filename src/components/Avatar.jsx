// import "./Avatar.css";
const Avatar = ({ src }) => {
  return (
    <div className="flex justify-center w-12 h-12 overflow-hidden mr-1 border-2 rounded-full ">
      <img className="w-12 h-12 object-fill" src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;
