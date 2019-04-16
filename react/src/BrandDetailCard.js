import React, { Component } from "react";
import back_arrow from "./back_arrow.svg";
import filled_heart from "./filled_heart.svg";
import heart_icon from "./heart_icon.png";

const BrandDetailCard = props => {
  console.log(props);
  const returnItemToCollection = () => {
    props.returnToCollection();
  };

  const renderSellerCompany = () => {
    if (props.brandDetails.seller) {
      return props.brandDetails.seller.company;
    }
  };

  const renderItemPrice = () => {
    if (props.brandDetails.price) {
      return props.brandDetails.price.amounts["USD"];
    } else {
      return "Price Upon Request";
    }
  };

  const toggleFavoritedStatus = () => {
    // console.log("hi", props.brandDetails.id);
    props.updateFavoritedItem(props.brandDetails.id);
  };
  return (
    <React.Fragment>
      <div className="home-container">
        <img
          className="home-icon"
          src={back_arrow}
          onClick={returnItemToCollection}
        />
        <h3 className="home-title">Home</h3>
        <div className="company-name">{renderSellerCompany()}</div>
      </div>
      <div className="item-full-page-detail">
        <div className="item-img">
          <img
            className="heart-btn"
            onClick={toggleFavoritedStatus}
            src={props.brandDetails.like ? filled_heart : heart_icon}
            alt="heart icon"
          />
          <img src={props.brandDetails["image"]} />
        </div>
        <div className="item-page-details">
          <h2>{props.brandDetails.title}</h2>
          <h3>{renderItemPrice()}</h3>
          <h4>
            <span>Measurements:</span> <br />{" "}
            {props.brandDetails.measurements.display}
          </h4>
          <button className="action-btn">Purchase</button>
          <button className="action-offer-btn">Make Offer</button>
        </div>
        <div className="item-page-description">
          <p>{props.brandDetails.description}</p>
          <h4>
            <span>Creator:</span> {props.brandDetails.creators}{" "}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrandDetailCard;
