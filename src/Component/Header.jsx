import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header({ onSearch, valueChange }) {
  const [inputText, setInputText] = useState("");
  const [showLogin, setShowLogin] = useState(false); //  To control login popup visibility
  const [user, setUser] = useState(null); //  To store logged in user name
  const [sizechange, setSizechange] = useState(!true);

  // To persist login across refreshes
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); //  Automatically show name if user is in localStorage
    }
  }, []);

  function textentered(e) {
    setInputText(e.target.value);
  }

  function searching() {
    console.log("Search:", inputText);
    onSearch(inputText);
    setInputText("");
  }

  // This passes the value to Homepage
  function sidebarclicked() {
    setSizechange((prev) => !prev);
    valueChange(sizechange);
  }

  return (
    <>
      {/* Login Popup */}
      {showLogin && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <Login
            onClose={() => setShowLogin(false)}
            onLogin={(userData) => {
              setUser(userData);
              localStorage.setItem("user", JSON.stringify(userData)); // Saving user to localStorage
              setShowLogin(false); //
            }}
          />
        </div>
      )}

      {/* Header */}
      <div className=" bg-[#0f0f0f] fixed top-0 left-0 w-full z-10 flex justify-between p-2">
        <div className="flex items-center gap-2">
          <img
            src="/img/Sidebar.png"
            className="h-8 w-max cursor-pointer"
            onClick={sidebarclicked}
          />
          <Link to="/">
            <img src="/img/youtubelogo.png" className="h-11 w-max" />
          </Link>
        </div>

        <div className="flex items-center">
          <input
            className="border border-gray-500 text-white rounded-l-3xl h-8 w-80 px-5"
            type="text"
            placeholder="Search"
            onChange={textentered}
            value={inputText}
          />
          <div
            className="h-8 w-12 flex justify-center items-center border border-gray-500 rounded-r-3xl bg-white cursor-pointer"
            onClick={searching}
          >
            <img src="/img/Searchicon.png" className="h-5 w-5" />
          </div>
        </div>

        <div className="flex items-center font-semibold">
          <Link to="/mychannel">
            <div className="flex items-center mr-4 border border-white px-4 py-1 rounded-full text-white">
              My Channel
            </div>
          </Link>

          {/*  Show user name if logged in, else show login */}
          <div
            className="flex items-center mr-4 border border-white px-4 py-1 rounded-full text-white cursor-pointer"
            onClick={() => !user && setShowLogin(true)}
          >
            <h1 className="text-l">
              {user ? `👋 ${user.fullname}` : "👨🏻 Sign in"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
