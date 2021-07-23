import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountContext } from "../Account";
import '../components/styles/CreateProduct.css';

const CreateProduct = () => {
  const { getSession } = useContext(AccountContext);
  const [status, setStatus] = useState(false);
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const postProduct = () => {
      getSession().then(async ({ headers }) => {
        console.log(data.name);
        const removeEmpty = (obj) => {
          Object.keys(obj).forEach(
            (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
          );
          return obj;
        };

        const params = removeEmpty(data);
        
        var url = new URL('./post_product', 'https://if8prmb4yi.execute-api.us-east-1.amazonaws.com/Prod/');

        Object.entries(params).forEach(([k, v]) =>
          url.searchParams.append(k, v)
        );
        console.log(url);
        console.log("headers: ", headers);

        const response = await fetch(url, {
          method: "POST",
          headers: headers,
        });
        var temp_data = await response.json();
        console.log(temp_data)
        console.log(temp_data.statusCode)
      });
    };
    postProduct();
  };
  useEffect(() => {
    const load = () => {
      getSession().then(async () => {
        setStatus(true);
      });
    };
    load();
  }, [getSession]);

  return (
    <>
      {status ? (
        <div className="create_product__container">
          <div className="h-1/3 mt-20 sm:mt-16 text-center">
            <h2 className="h2"> Create an Item!</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="create_product__form "
          >
            
            <div className="cp_input__container--name">
              
              <h3 className="h3 m-2"> Name: </h3>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {})}
                className="cp_input--title"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">Calories:</h3>
              <input
                type="number"
                placeholder="calories"
                {...register("calories", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">Carbo:</h3>
              <input
                type="number"
                placeholder="carbo"
                {...register("carbo", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">Cups:</h3>
              <input
                type="number"
                placeholder="cups"
                {...register("cups", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">fat:</h3>
              <input
                type="number"
                placeholder="fat"
                {...register("fat", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">fiber:</h3>
              <input
                type="number"
                placeholder="fiber"
                {...register("fiber", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">mfr:</h3>
              <input
                type="text"
                placeholder="mfr"
                {...register("mfr", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">potass:</h3>
              <input
                type="number"
                placeholder="potass"
                {...register("potass", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">protein:</h3>
              <input
                type="number"
                placeholder="protein"
                {...register("protein", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">rating:</h3>
              <input
                type="number"
                placeholder="rating"
                {...register("rating", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">shelf:</h3>
              <input
                type="number"
                placeholder="shelf"
                {...register("shelf", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">sodium:</h3>
              <input
                type="number"
                placeholder="sodium"
                {...register("sodium", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">sugars:</h3>
              <input
                type="number"
                placeholder="sugars"
                {...register("sugars", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">type:</h3>
              <input
                type="text"
                placeholder="type"
                {...register("type", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">vitamins:</h3>
              <input
                type="number"
                placeholder="vitamins"
                {...register("vitamins", {})}
                className="cp_input"
              />
            </div>
            <div className="cp_input__container">
              <h3 className="h3 m-2">weight:</h3>
              <input
                type="number"
                placeholder="weight"
                {...register("weight", {})}
                className="cp_input"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-start w-full">
              <button type="submit" className="btn--primary w-full">
                {" "}
                Create
              </button>
            </div>
          </form>
        </div>
      ) : (
        <h1> </h1>
      )}
    </>
  );
};

export default CreateProduct;
