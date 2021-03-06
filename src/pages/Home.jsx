import React, { useState, useContext, useEffect, useMemo } from "react";
import Search from "../components/Search";
import { AccountContext } from "../Account";
import Products from "../components/Products";
import "../components/styles/Home.css";

const Home = () => {
  const { getSession } = useContext(AccountContext);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = () => {
      getSession().then(async () => {
        setStatus(true);
      });
    };
    load();
    const fetchProducts = () => {
      getSession().then(async ({ headers }) => {
        const url =
          "https://if8prmb4yi.execute-api.us-east-1.amazonaws.com/Prod/fetch_products";
        console.log("headers: ", headers);
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        var temp_data = await response.json();
        const products_array = JSON.parse(temp_data.body);
        console.log(products_array);
        setProducts(products_array);
        console.log(temp_data.statusCode);
      });
    };
    fetchProducts();
  }, [getSession]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredList = useMemo(
    () =>
      products.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }),
    [products, search]
  );

  return (
    <>
      {status ? (
          <div className="home__container">
            <Search handleSearch={handleSearch} search={search}></Search>
            <Products products={filteredList}></Products>
          </div>
      ) : (
        <h1> </h1>
      )}
    </>
  );
};

export default Home;
