import React, { Component } from "react";

const BrandItem = props => {
  // console.log(props);
  return (
    <div>
      <div>
        <img
          className="search-image"
          src={props.brand["image"]}
          alt="fashion look image"
        />
      </div>
    </div>
  );
};

export default BrandItem;
