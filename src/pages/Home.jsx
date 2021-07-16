import React, { Component } from "react";
import Search from "../components/Search";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-start items-center w-full min-h-screen h-screen">
          <Search></Search>
          <div className="h-2/3">
            <h2>ITEMS List</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
