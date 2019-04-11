import React, { Component } from "react";
import BrandItem from "./BrandItem";

class Brands extends Component {
  renderBrands = () => {
    console.log(this.props);
    // debugger;
    return this.props.newBrands.map(brand => {
      console.log(brand);
      return <BrandItem key={brand.id} brand={brand} />;
    });
  };
  render() {
    console.log(this.props);

    return <div>{this.renderBrands()}</div>;
  }
}

export default Brands;
