import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AccountContext } from "../Account";

const ModalForm = ({item,handleClose}) => {
  const { getSession } = useContext(AccountContext);
  const {
    register,
    handleSubmit,
  } = useForm();
  
  const onSubmit = (data) => {
    const putProducts = () => {
      getSession().then(async ({ headers }) => {
        const removeEmpty = (obj) => {
          Object.keys(obj).forEach(
            (k) => !obj[k] && obj[k] !== undefined && delete obj[k]
          );
          return obj;
        };
        const params = removeEmpty(data);
        console.log(params);
        var url = new URL('./put_product', 'https://if8prmb4yi.execute-api.us-east-1.amazonaws.com/Prod/');
          
        const response = await fetch(url, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify({
            name: data.name,
            featuresPair: params,
          }),
        });
        var temp_data = await response.json();
        console.log(temp_data.statusCode);
      });
    };
    putProducts();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal___form"
    >
      <div className="absolute top-2 right-2" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 hover:text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2"> Name: </h3>
        <input
          type="text"
          placeholder="name"
          {...register("name", {})}
          defaultValue={item.name}
          className="modalInput--title"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Calories:</h3>
        <input
          type="number"
          placeholder="calories"
          {...register("calories", {})}
          defaultValue={item.calories}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Carbo:</h3>
        <input
          type="number"
          placeholder="carbo"
          {...register("carbo", {})}
          defaultValue={item.carbo}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Cups:</h3>
        <input
          type="number"
          placeholder="cups"
          {...register("cups", {})}
          defaultValue={item.cups}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">fat:</h3>
        <input
          type="number"
          placeholder="fat"
          {...register("fat", {})}
          defaultValue={item.fat}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">fiber:</h3>
        <input
          type="number"
          placeholder="fiber"
          {...register("fiber", {})}
          defaultValue={item.fiber}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">mfr:</h3>
        <input
          type="text"
          placeholder="mfr"
          {...register("mfr", {})}
          defaultValue={item.mfr}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">potass:</h3>
        <input
          type="number"
          placeholder="potass"
          {...register("potass", {})}
          defaultValue={item.potass}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">protein:</h3>
        <input
          type="number"
          placeholder="protein"
          {...register("protein", {})}
          defaultValue={item.protein}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">rating:</h3>
        <input
          type="number"
          placeholder="rating"
          {...register("rating", {})}
          defaultValue={item.rating}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">shelf:</h3>
        <input
          type="number"
          placeholder="shelf"
          {...register("shelf", {})}
          defaultValue={item.shelf}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">sodium:</h3>
        <input
          type="number"
          placeholder="sodium"
          {...register("sodium", {})}
          defaultValue={item.sodium}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">sugars:</h3>
        <input
          type="number"
          placeholder="sugars"
          {...register("sugars", {})}
          defaultValue={item.sugars}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">type:</h3>
        <input
          type="text"
          placeholder="type"
          {...register("type", {})}
          defaultValue={item.type}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">vitamins:</h3>
        <input
          type="number"
          placeholder="vitamins"
          {...register("vitamins", {})}
          defaultValue={item.vitamins}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">weight:</h3>
        <input
          type="number"
          placeholder="weight"
          {...register("weight", {})}
          defaultValue={item.weight}
          className="modalInput"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-start w-full">
        <button type="submit" className="btn--primary">
          {" "}
          Update
        </button>
        <button
          type="button"
          className="btn--primary"
          onClick={handleClose}
        >
          {" "}
          Close
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
