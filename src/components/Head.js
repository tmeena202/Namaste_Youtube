/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      // console.log("Clean up function");
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API call for : " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (searchQuery.trim() !== "") {
      // Navigate to the result page with the search query
      window.location.href = `/result/${encodeURIComponent(searchQuery)}`;
    }
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

      <div className="col-span-10 px-10">
        {/* Searc Bar here */}
        <div>
          <form onSubmit={handleSearch}>
            <input
              className="p-2 border border-gray-400 w-1/2 rounded-l-full"
              type="text"
              placeholder="search anything ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={(e) => setShowSuggestions(true)}
              onBlur={(e) => setShowSuggestions(false)}
            />
            <button
              type="submit"
              className="p-2 bg-gray-200 border border-gray-400 rounded-r-full"
            >
              Search
            </button>
          </form>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white m-1 py-2 w-[390px] shadow-2xl rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-200">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
