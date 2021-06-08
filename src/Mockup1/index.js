import "./index.css";
import React, { useState, useEffect } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

import axios from "axios";
function MockUp1() {
  const [products, setProducts] = useState([]);
  const [currentid, setCurrentid] = useState(1);
  function increament() {
    setCurrentid(currentid + 1);
  }
  function updateId(p) {
    setCurrentid((currentid) => (currentid = p));
  }
  function decreament() {
    setCurrentid(currentid - 1);
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  return (
    <div className="Main">
      {products.length > 0 ? (
        products[currentid - 1] ? (
          <div className="carouseltype">
            <FaLessThan className="iconsL" onClick={decreament} />
            <img
              src={products[currentid - 1].thumbnailUrl}
              alt="Girl in a jacket"
              className="mainImage"
            />
            <FaGreaterThan className="iconsL" onClick={increament}>
              Greater than
            </FaGreaterThan>
          </div>
        ) : (
          setCurrentid(1)
        )
      ) : null}

      <div className="imagesCard">
        {products.map((p) => (
          <img
            className={p.id === currentid ? "activebox" : "notactivebox"}
            src={p.thumbnailUrl}
            alt="Girl in a jacket"
            onClick={() => updateId(p.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MockUp1;
