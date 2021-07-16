import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="absolute top-0 flex flex-col sm:flex-row items-center justify-around w-full border-b-2 h-28 sm:h-auto">
          <Link className="h2 m-2" to="/home" >Shop</Link>
          <div className="flex">
            <Link className="h4 m-4 text-blue-600">Show Items</Link>
            <Link className="h4 m-4 text-gray-700">Create Items</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
