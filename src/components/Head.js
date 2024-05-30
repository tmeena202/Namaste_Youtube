import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        {/* Menu and Youtube logo  */}
        <img
          onClick={() => toogleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu-logo"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </a>
      </div>

      <div className="col-span-10 text-center">
        {/* Searc Bar here */}
        <input
          className="p-2 border border-gray-400 w-1/2 rounded-l-full"
          type="text"
          placeholder="search anything ..."
        />
        <button className="p-2 bg-gray-200 border border-gray-400 rounded-r-full">
          Search
        </button>
      </div>

      <div className="col-span-1">
        {/* User login and Logout */}
        <img
          className="h-8"
          alt="User-Logo"
          src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
