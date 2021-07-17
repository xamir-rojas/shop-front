import React, { useState ,useContext, useEffect } from "react";
import Search from "../components/Search";
import { AccountContext } from "../Account";
import rp from 'request-promise';

const Home = () => {
  const [data, setData] = useState([]);
  const { getSession } = useContext(AccountContext);
  
  const fetchProducts = () => {
    getSession().then(async ({headers}) => {
      const url = 'https://nztyy2xzte.execute-api.us-east-1.amazonaws.com/Prod/fetch_products';
      console.log(headers);
      const response = await fetch(url,{
        method: 'GET',
        headers: headers
      })
      setData(response.json);
    })
  }

  useEffect(() => {
    fetchProducts()
  }, []);
  
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full min-h-screen h-screen">
        <Search></Search>
        <div className="h-2/3">
          <h2>ITEMS List</h2>
          {data}
          {/*.map((item) => {
            <div>
              {item}
            </div>
          }) */}
        </div>
      </div>
    </>
  );
};

export default Home;
