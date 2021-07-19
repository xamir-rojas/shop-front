import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../Account";

const Navbar = () => {
  
  const { logout } = useContext(AccountContext);
  return (
    <>
      <div className="absolute top-0 flex flex-col sm:flex-row items-center justify-around w-full border-b-2 h-28 sm:h-auto">
        <Link className="h2 m-2" to="/home">
          Shop
        </Link>
        <div className="flex">
          <Link className="h4 m-4 text-gray-700" to="/home">Show Items</Link>
          <Link className="h4 m-4 text-gray-700" to="/products/create">Create Items</Link>
          <button className="h4 m-4 text-gray-700 hover:text-blue-600" onClick={logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
