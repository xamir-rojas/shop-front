import React from "react";

const Products = (props) => {

  return (
    <div className="products__list">
      {props.products.map((item) => {
        return (
          <div
            key={item.name}
            className="product__container"
          >
              <div className="product_title">
                  <h4 className="h4 text-blue-500 group-hover:text-white">{item.name} </h4></div>
            <div className="product_info">
                <p className="group-hover:text-white">
                    {"Calories :" + item.calories} <br/>
                    {"Protein :" + item.protein} <br/>
                    {"Rating :" + item.rating} <br/>
                </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
