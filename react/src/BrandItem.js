import React, { Component } from "react";
import heart_icon from "./heart_icon.png";
import filled_heart from "./filled_heart.svg";

class BrandItem extends Component {
  renderPrices = () => {
    // console.log(this.props);
    if (this.props.brand.price) {
      return this.props.brand.price.amounts["USD"];
    } else {
      return "Price Upon Request";
    }
  };

  getItemDetails = () => {
    this.props.callbackSingleItem(this.props.brand.id);
    console.log(this.props.brand.id);
  };

  toggleFavoritedStatus = () => {
    // console.log("hi", this.props.brand.id);
    this.props.updateFavoritedItem(this.props.brand.id);
  };

  render() {
    return (
      <div className="">
        <article>
          <div className="search-image">
            <img
              onClick={this.getItemDetails}
              className="search-image"
              src={this.props.brand["image"]}
              alt="fashion look image"
            />
          </div>
          <div className="item-container">
            <div className="price">{this.renderPrices()}</div>
            <div className="heart-img">
              <img
                className="heart-btn"
                onClick={this.toggleFavoritedStatus}
                src={this.props.brand.like ? filled_heart : heart_icon}
                alt="heart icon"
              />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default BrandItem;
