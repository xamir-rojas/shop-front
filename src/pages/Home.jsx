import React, { useState, useContext, useEffect } from "react";
import Search from "../components/Search";
import { AccountContext } from "../Account";

const Home = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    const fetchProducts = () => {
      getSession().then(async ({ headers }) => {
        const url =
          "https://nztyy2xzte.execute-api.us-east-1.amazonaws.com/Prod/fetch_products";
        console.log("headers: ", headers);
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        var temp_data = await response.json();
        const data_array = JSON.parse(temp_data.body);
        console.log(data_array);
        setData(data_array);
        setStatus(true);
      });
    };
    fetchProducts();
  }, [getSession]);

  return (
    <>
      {status ? (
        <div className="flex flex-col justify-center items-center w-full min-h-screen h-screen">
          <Search></Search>
          <div className="h-2/3 flex flex-col  justify-start items-center w-full">
            <div className="products__list__container flex flex-wrap w-full bg-red-100">
              {data.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="product m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 bg-gray-400"
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h1> 404 </h1>
      )}
    </>
  );
};

export default Home;
