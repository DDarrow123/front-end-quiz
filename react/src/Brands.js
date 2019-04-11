import React, { Component } from "react";
import BrandItem from "./BrandItem";

class Brands extends Component {
  renderBrands = () => {
    return this.props.newBrands.map(brand => {
      // console.log(brand);
      return <BrandItem key={brand.id} brand={brand} />;
    });
  };
  render() {
    return (
      <div>
        <div className="wrapper">{this.renderBrands()}</div>
        <div className="load-btn">
          <button>LOAD MORE</button>
        </div>
      </div>
    );
  }
}

export default Brands;

// Brands.propTypes = {
//   newBrands: React.PropTypes.array.isRequired
// };
