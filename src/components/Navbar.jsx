import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../Account";

const Navbar = () => {
  const { logout } = useContext(AccountContext);
  return (
    <>
      <div className="absolute top-0 flex flex-col sm:flex-row items-center justify-around w-full border-b-2 h-28 sm:h-auto">
        <Link className="h2 m-2 flex" to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clip-rule="evenodd"
            />
          </svg>
          Shop
        </Link>
        <div className="flex">
          <Link className="h4 m-4 text-gray-700" to="/home">
            Show Items
          </Link>
          <Link className="h4 m-4 text-gray-700" to="/products/create">
            Create Items
          </Link>
          <button
            className="h4 m-4 text-gray-700 hover:text-blue-600 flex items-center "
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
