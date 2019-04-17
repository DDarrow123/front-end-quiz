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
          updateFavoritedItem={this.props.updateFavoritedItem}
        />
      );
    });
  };

  fetchMoreBrands = () => {
    this.props.fetchAddedBrands();
  };

  renderBrandDetailCard = () => {
    let brandDetails = this.props.newBrands.find(brand => {
      return brand.id === this.props.showDetailsId;
    });
    console.log(brandDetails);
    return (
      <BrandDetailCard
        brandDetails={brandDetails}
        returnToCollection={this.props.returnToCollection}
        updateFavoritedItem={this.props.updateFavoritedItem}
      />
    );
  };

  render() {
    // console.log(this.props.renderedItem);
    return (
      <div>
        {this.props.showDetailsId ? (
          this.renderBrandDetailCard()
        ) : (
          <div>
            <h1 className="App-welcome">Browse page</h1>
            <div className="wrapper">{this.renderBrands()}</div>
            <div className="load-btn">
              <button onClick={this.fetchMoreBrands}>LOAD MORE</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Brands;

// Brands.propTypes = {
//   newBrands: React.PropTypes.array.isRequired
// };
