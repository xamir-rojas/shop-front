import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { AccountContext } from "../Account";

const ModalForm = (props) => {
const { getSession } = useContext(AccountContext);
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
                "name": data.name,
                "featuresPair": {
                    "calories": parseInt(data.calories)
                }
            })
          });
          var temp_data = await response.json();
          const products_array = JSON.parse(temp_data.body);
          console.log(products_array);
        });
      };
      putProducts();
  };
  console.log(errors);

  return (
    <Modal isOpen={props.modalIsOpen} ariaHideApp={false} onRequestClose={props.handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="modal___form">
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
            defaultValue={parseInt(props.item.calories)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">Carbo:</h3>
          <input
            type="number"
            placeholder="carbo"
            {...register("carbo", {})}
            defaultValue={parseInt(props.item.carbo)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">Cups:</h3>
          <input
            type="number"
            placeholder="cups"
            {...register("cups", {})}
            defaultValue={parseInt(props.item.cups)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">fat:</h3>
          <input
            type="number"
            placeholder="fat"
            {...register("fat", {})}
            defaultValue={parseInt(props.item.fat)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">fiber:</h3>
          <input
            type="number"
            placeholder="fiber"
            {...register("fiber", {})}
            defaultValue={parseInt(props.item.fiber)}
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
            defaultValue={parseInt(props.item.potass)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">protein:</h3>
          <input
            type="number"
            placeholder="protein"
            {...register("protein", {})}
            defaultValue={parseInt(props.item.protein)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">rating:</h3>
          <input
            type="number"
            placeholder="rating"
            {...register("rating", {})}
            defaultValue={parseInt(props.item.rating)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">shelf:</h3>
          <input
            type="number"
            placeholder="shelf"
            {...register("shelf", {})}
            defaultValue={parseInt(props.item.shelf)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">sodium:</h3>
          <input
            type="number"
            placeholder="sodium"
            {...register("sodium", {})}
            defaultValue={parseInt(props.item.sodium)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">sugars:</h3>
          <input
            type="number"
            placeholder="sugars"
            {...register("sugars", {})}
            defaultValue={parseInt(props.item.sugars)}
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
            defaultValue={parseInt(props.item.vitamins)}
            className="modalInput"
          />
        </div>
        <div className="modalInput__container">
          <h3 className="h3 m-2">weight:</h3>
          <input
            type="number"
            placeholder="weight"
            {...register("weight", {})}
            defaultValue={parseInt(props.item.weight)}
            className="modalInput"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-start items-start w-full">
          <input type="submit" className="btn--primary" />
          <button type="button" className="btn--primary" onClick={props.handleClose} />
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
