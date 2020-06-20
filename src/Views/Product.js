import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Product = () => {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/3`;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data); //set the response to product
    });
  }, [url]); //run this only when ulr is changed

  //output only if product is existing
  if (product) {
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
