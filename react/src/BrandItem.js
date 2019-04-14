import React, { Component } from "react";
import heart_icon from "./heart_icon.png";

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
    console.log("hi", this.props.brand.id);
    this.props.callbackSingleItem(this.props.brand.id);
  };

  render() {
    // const { brand } = this.props;
    return (
      <div className="">
        <article onClick={this.getItemDetails}>
          <div className="search-image">
            <img
              className="search-image"
              src={this.props.brand["image"]}
              alt="fashion look image"
            />
          </div>
          <div className="item-container">
            <div className="price">{this.renderPrices()}</div>
            <div className="heart-img">
              <img className="heart-btn" src={heart_icon} alt="heart icon" />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default BrandItem;
