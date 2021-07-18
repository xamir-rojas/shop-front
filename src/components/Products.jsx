import React, { useState } from "react";
import ModalForm from "./ModalForm";

const Products = (props) => {
  const [item, setItem] = useState({});
  const [modalIsOpen, setModalIsOpem] = useState(false);
  
  const handleClick = (event, item) => {
    setItem(item);
    setModalIsOpem(true);
  };

  const handleClose = () => {
    setItem({});
    setModalIsOpem(false);
  }

  return (
    <div className="products__list">
      {props.products.map((item) => {
        return (
          <div
            key={item.name}
            className="product__container"
            onClick={(event) => handleClick(event, item)}
          >
            <div className="product_title">
              <h4 className="h4 text-blue-500 group-hover:text-white">
                {item.name}{" "}
              </h4>
            </div>
            <div className="product_info">
              <p className="group-hover:text-white">
                {"Calories :" + item.calories} <br />
                {"Protein :" + item.protein} <br />
                {"Rating :" + item.rating} <br />
              </p>
            </div>
          </div>
        );
      })}
      <ModalForm item={item} modalIsOpen={modalIsOpen} handleClose={handleClose}>
      </ModalForm>
      
    </div>
  );
};

export default Products;
