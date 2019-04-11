import React, { Component } from "react";

class BrandItem extends Component {
  renderPrices = () => {
    console.log(this.props);
    if (this.props.brand.price) {
      // debugger;
      if (this.props.brand.price === null) {
        return "Price Upon Request";
        //fix this later!!
      }
      return this.props.brand.price.amounts["USD"];
    }
  };
  render() {
    return (
      <div className="">
        <article>
          <div className="search-image">
            <img
              className="search-image"
              src={this.props.brand["image"]}
              alt="fashion look image"
            />
          </div>
          <div className="price">{this.renderPrices()}</div>
        </article>
      </div>
    );
  }
}

export default BrandItem;
