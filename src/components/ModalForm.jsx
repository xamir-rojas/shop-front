import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AccountContext } from "../Account";

const ModalForm = (props) => {
  const { getSession } = useContext(AccountContext);

  /*
  const url =
  'https://nztyy2xzte.execute-api.us-east-1.amazonaws.com/Prod/fetch_product?name='+ props.item;
  
  useEffect(() => {
    const fetchProduct = () => {
      getSession().then(async ({ headers }) => {
        console.log('url :', url);
        console.log("headers: ", headers);
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        var temp_data = await response.json();
        const products_array = JSON.parse(temp_data.body);
        console.log(products_array);
      });
    };
    fetchProduct();
  }, []);
*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const putProducts = () => {
      getSession().then(async ({ headers }) => {
        console.log(data.name);
        const url =
          "https://nztyy2xzte.execute-api.us-east-1.amazonaws.com/Prod/put_product";
        console.log(url);
        console.log("headers: ", headers);

        const response = await fetch(url, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify({
            name: data.name,
            featuresPair: {
              calories: parseInt(data.calories),
            },
          }),
        });
        var temp_data = await response.json();
        const products_array = JSON.parse(temp_data.body);
        console.log(products_array);
      });
    };
    putProducts();
  };
  console.log("errors :", errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={props.onScreen ? "modal___form" : "hidden"}
    >
      <div className="absolute top-2 right-2" onClick={props.handleClose}>
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
          defaultValue={props.item.name}
          className="modalInput--title"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Calories:</h3>
        <input
          type="number"
          placeholder="calories"
          {...register("calories", {})}
          defaultValue={props.item.calories}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Carbo:</h3>
        <input
          type="number"
          placeholder="carbo"
          {...register("carbo", {})}
          defaultValue={props.item.carbo}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">Cups:</h3>
        <input
          type="number"
          placeholder="cups"
          {...register("cups", {})}
          defaultValue={props.item.cups}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">fat:</h3>
        <input
          type="number"
          placeholder="fat"
          {...register("fat", {})}
          defaultValue={props.item.fat}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">fiber:</h3>
        <input
          type="number"
          placeholder="fiber"
          {...register("fiber", {})}
          defaultValue={props.item.fiber}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">mfr:</h3>
        <input
          type="text"
          placeholder="mfr"
          {...register("mfr", {})}
          defaultValue={props.item.mfr}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">potass:</h3>
        <input
          type="number"
          placeholder="potass"
          {...register("potass", {})}
          defaultValue={props.item.potass}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">protein:</h3>
        <input
          type="number"
          placeholder="protein"
          {...register("protein", {})}
          defaultValue={props.item.protein}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">rating:</h3>
        <input
          type="number"
          placeholder="rating"
          {...register("rating", {})}
          defaultValue={props.item.rating}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">shelf:</h3>
        <input
          type="number"
          placeholder="shelf"
          {...register("shelf", {})}
          defaultValue={props.item.shelf}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">sodium:</h3>
        <input
          type="number"
          placeholder="sodium"
          {...register("sodium", {})}
          defaultValue={props.item.sodium}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">sugars:</h3>
        <input
          type="number"
          placeholder="sugars"
          {...register("sugars", {})}
          defaultValue={props.item.sugars}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">type:</h3>
        <input
          type="text"
          placeholder="type"
          {...register("type", {})}
          defaultValue={props.item.type}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">vitamins:</h3>
        <input
          type="number"
          placeholder="vitamins"
          {...register("vitamins", {})}
          defaultValue={props.item.vitamins}
          className="modalInput"
        />
      </div>
      <div className="modalInput__container">
        <h3 className="h3 m-2">weight:</h3>
        <input
          type="number"
          placeholder="weight"
          {...register("weight", {})}
          defaultValue={props.item.weight}
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
          onClick={props.handleClose}
        >
          {" "}
          Close
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
