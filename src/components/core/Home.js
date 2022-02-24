import React, { Fragment, useState, useEffect } from "react";
import { listLatest } from "../product/api-product.js";
//import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../../layout/MetaData";
import Loader from "../../layout/Loader/Loader";

export default function Home() {
  //const [suggestionTitle] = useState("Latest Products");
  // const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true);
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error);
        setLoading(false);
      } else {
        setLoading(false);
        setProducts(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  //   useEffect(() => {
  //     const abortController = new AbortController();
  //     const signal = abortController.signal;

  //     listCategories(signal).then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         setCategories(data);
  //       }
  //     });
  //     return function cleanup() {
  //       abortController.abort();
  //     };
  //   }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <h1>Your One-Stop Shop</h1>

            <a href="#container">
              <button>
                Scroll{" "}
                {
                  //<CgMouse />
                }
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
