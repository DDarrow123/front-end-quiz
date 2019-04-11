import React, { Component } from "react";
import BrandItem from "./BrandItem";

const URL = "http://localhost:3001/browse?start=";

class Brands extends Component {
  renderBrands = () => {
    return this.props.newBrands.map(brand => {
      // console.log(brand);
      return (
        <BrandItem key={brand.id} brand={brand} newBrands={this.props.brands} />
      );
    });
  };

  fetchMoreBrands = () => {
    this.props.fetchAddedBrands();
  };
  render() {
    return (
      <div>
        <div className="wrapper">{this.renderBrands()}</div>
        <div className="load-btn">
          <button onClick={this.fetchMoreBrands}>LOAD MORE</button>
        </div>
      </div>
    );
  }
}

export default Brands;

// Brands.propTypes = {
//   newBrands: React.PropTypes.array.isRequired
// };
