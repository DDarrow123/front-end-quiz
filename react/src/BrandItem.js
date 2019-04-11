import React, { Component } from "react";
import heart_icon from "./heart_icon.png";

// const totalItems = Math.ceil(total / limit);

class BrandItem extends Component {
  renderPrices = () => {
    console.log(this.props);
    if (this.props.brand.price) {
      return this.props.brand.price.amounts["USD"];
    } else {
      return "Price Upon Request";
    }
  };

  // fetchMoreBrands = () => {
  //   console.log("hello!");
  //   // fetch(URL)
  //   //   .then(res => res.json())
  //   //   .then(
  //   //     addOnBrands => {
  //   //       this.setState({
  //   //         moreBrands: [...this.props.newBrands, { moreBrands: addOnBrands }]
  //   //       });
  //   //     },
  //   //     () => console.log("hello!")
  //   //   );
  // };
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
