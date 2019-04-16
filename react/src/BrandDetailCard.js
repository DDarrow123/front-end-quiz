import React, { Component } from "react";
import back_arrow from "./back_arrow.svg";
import filled_heart from "./filled_heart.svg";
import heart_icon from "./heart_icon.png";

const BrandDetailCard = props => {
  const returnItemToCollection = () => {
    props.returnToCollection();
    // console.log(props);
  };

  const renderSellerCompany = () => {
    if (props.item.seller) {
      return props.item.seller.company;
    }
  };

  const renderItemPrice = () => {
    if (props.item.price) {
      return props.item.price.amounts["USD"];
    } else {
      return "Price Upon Request";
    }
  };

  const toggleFavoritedStatus = () => {
    console.log("hi", props.item.id);
    props.updateFavoritedItem(props.item.id);
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
            src={props.item.like ? filled_heart : heart_icon}
            alt="heart icon"
          />
          <img src={props.item["image"]} />
        </div>
        <div className="item-page-details">
          <h2>{props.item.title}</h2>
          <h3>{renderItemPrice()}</h3>
          <h4>
            <span>Measurements:</span> <br /> {props.item.measurements.display}
          </h4>
          <button className="action-btn">Purchase</button>
          <button className="action-offer-btn">Make Offer</button>
        </div>
        <div className="item-page-description">
          <p>{props.item.description}</p>
          <h4>
            <span>Creator:</span> {props.item.creators}{" "}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrandDetailCard;
