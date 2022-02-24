import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import config from "../../config/config";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img
        src={`${config.apiHost}/api/product/image/${product._id}`}
        alt={product.name}
      />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan"> ({0} Reviews)</span>
      </div>
      <span>{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
