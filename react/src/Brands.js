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

  render() {
    return (
      <div>
        {this.props.renderedItem ? (
          <BrandDetailCard
            item={this.props.renderedItem}
            returnToCollection={this.props.returnToCollection}
            updateFavoritedItem={this.props.updateFavoritedItem}
          />
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
