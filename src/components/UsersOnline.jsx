import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const UsersOnline = () => {
  const { error, documents } = useCollection("users");
  return (
    <div className=" flex p-2">
      <div className="w-min flex items-center">
        <h2>All users</h2>
      </div>
      {error && <div>{error}</div>}
      <Splide
        className="w-full"
        options={{
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
          mediaQuery: "min",
          breakpoints: {
            320: {
              perPage: 4,
              gap: "0rem",
            },
            640: {
              perPage: 8,
            },
            1024: {
              perPage: 24,
              arrows: false,
            },
          },
        }}
      >
        {documents &&
          documents.map((user) => (
            <SplideSlide>
              <div className="flex flex-col justify-center w-full relative" key={user.id}>
                {user.online && (
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute"></span>
                )}
                <div className="flex items-center justify-center ">
                  <Avatar className="w-12 h-12" src={user.photoURL} />
                </div>
                <span className="text-center text-sm">{user.displayName}</span>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default UsersOnline;
