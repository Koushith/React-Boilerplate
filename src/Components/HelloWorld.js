import React, { Component } from 'react';

const HelloWorld = (props) => {
  console.log(props);
  const { name } = props;
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default HelloWorld;
