import React, { Component } from "react";
import BrandItem from "./BrandItem";
import BrandDetailCard from "./BrandDetailCard";

class Brands extends Component {
  renderBrands = () => {
    return this.props.newBrands.map(brand => {
      return (
        <BrandItem
          key={brand.id}
          brand={brand}
          newBrands={this.props.brands}
          callbackSingleItem={this.props.fetchSingleItem}
        />
      );
    });
  };

  fetchMoreBrands = () => {
    this.props.fetchAddedBrands();
  };
  render() {
    console.log(this.props.renderedItem);
    return (
      <div>
        <div className="wrapper">
          {this.props.renderedItem ? (
            <BrandDetailCard
              item={this.props.renderedItem}
              returnToCollection={this.props.returnToCollection}
            />
          ) : (
            this.renderBrands()
          )}
        </div>
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
