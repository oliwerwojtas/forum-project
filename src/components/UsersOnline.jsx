import { useCollection } from "../hooks/useCollection";
//components
import Avatar from "./Avatar";
import ErrorPage from "../utilities/ErrorPage";
//utilities
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const UsersOnline = () => {
  const { error, documents } = useCollection("users");

  const sortUsers = (a, b) => {
    return a.online ? -1 : b.online ? 1 : 0;
  };
  return (
    <div className="lg:flex justify-center items-center bg-[#e4e5f1] dark:bg-[#25273c]">
      <div className="w-full flex p-2 lg:w-11/12">
        <div className=" flex items-center sm:w-2/12 lg:w-16">
          <h2 className="mr-2 dark:text-[white]">Users:</h2>
        </div>
        {error && <ErrorPage message={error} />}
        <Splide
          className="sm:w-10/12 lg:w-full"
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
            mediaQuery: "min",
            breakpoints: {
              320: {
                perPage: 4,
                gap: "",
              },
              480: {
                perPage: 6,
              },
              640: {
                perPage: 8,
              },
              720: {
                perPage: 10,
              },
              900: {
                perPage: 12,
              },
              1024: {
                perPage: 14,
              },
              1224: {
                perPage: 16,
              },
              1400: {
                perPage: 18,
              },
            },
          }}
        >
          {documents &&
            documents
              .slice()
              .sort(sortUsers)
              .map((user) => (
                <SplideSlide key={user.id} className="relative z-10">
                  <div className="flex flex-col justify-center w-full relative">
                    {user.online && (
                      <span className="inline-block w-3 h-3 rounded-full bg-green-500 border-2 border-white absolute"></span>
                    )}
                    <div className="flex items-center justify-center ">
                      <Avatar className="w-12 h-12" src={user.photoURL} />
                    </div>
                    <span
                      className="text-center text-sm dark:text-[white] truncate"
                      title={user.displayName}
                    >
                      {user.displayName}
                    </span>
                  </div>
                </SplideSlide>
              ))}
        </Splide>
      </div>
    </div>
  );
};
export default UsersOnline;
