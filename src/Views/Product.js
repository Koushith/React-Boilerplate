import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  console.log(id);
  // Create your own Mock API: https://mockapi.io/
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data); //set the response to product
    });
  }, [url]); //run this only when ulr is changed

  //output only if product is existing
  if (product) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.name}</h1>
        <div>
          <img src={product.images[0].imageUrl} alt={product.name} />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.price}</div>
        <div>{product.description}</div>
      </div>
    );
  }

  return <div className='container mx-auto'>{content}</div>;
};

export default Product;
