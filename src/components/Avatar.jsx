import "./Avatar.css";
const Avatar = ({ src }) => {
  return (
    <div className="flex justify-center w-12 h-12 rounded-md overflow-hidden">
      <img src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;
