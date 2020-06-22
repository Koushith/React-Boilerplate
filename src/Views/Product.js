import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  console.log(id);
  // Create your own Mock API: https://mockapi.io/
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });

  // while fetching set loader to true
  let content = null;
  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        // after fetching stop the loader
        setProduct({
          loading: false,
          data: response.data,
          error: false,
        });
        //set the response to product
      })
      .catch((error) => {
        setProduct({
          loading: false,

          error: true,
        });
      });
  }, [url]); //run this only when ulr is changed

  // if its still loading, show the spinner
  if (product.loading) {
    content = <Loader></Loader>;
  }

  // if error -

  if (product.error) {
    content = <p>There was an error</p>;
  }

  //output only if product is existing
  if (product.data) {
    content = (
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className='font-bold text-xl mb-3'>$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div className='container mx-auto'>{content}</div>;
};

export default Product;
