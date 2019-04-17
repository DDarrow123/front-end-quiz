import React, { Component } from "react";
import "./App.css";
import Brands from "./Brands";

const URL = "http://localhost:3001/browse";
const itemURL = "http://localhost:3001/item";
const likeURL = "http://localhost:3001/like";

class App extends Component {
  state = {
    brands: [],
    showDetailsId: null
  };
  componentDidMount() {
    this.fetchBrands();
  }

  fetchBrands = () => {
    fetch(URL)
      .then(res => res.json())
      .then(returnedBrands => {
        this.setState(
          {
            brands: returnedBrands.items
          },
          () => console.log(returnedBrands)
        );
      });
  };

  fetchAddedBrands = () => {
    // console.log(this.state.brands.length);
    fetch(URL + `?start=${this.state.brands.length}`)
      .then(res => res.json())
      .then(addOnBrands => {
        this.setState(
          {
            brands: [...this.state.brands, ...addOnBrands.items]
          },
          () => console.log(this.state.brands)
        );
      });
  };

  fetchSingleItem = id => {
    //Note: can also fetch by id but I chose to use the array of items I already had fetched to optimize performance
    // fetch(itemURL + `/${id}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    //   }
    // })
    //   .then(r => r.json())
    //   .then(fetchedItem => {
    //     console.log(fetchedItem);
    //     this.setState({
    //       renderedItem: fetchedItem
    //     });
    //   });
    let selectedItem = this.state.brands.find(item => {
      return item.id == id;
    });
    this.setState(
      {
        showDetailsId: selectedItem.id
      },
      () => console.log(this.state.showDetailsId)
    );
  };

  returnToCollection = () => {
    this.setState({
      showDetailsId: null
    });
  };

  updateFavoritedItem = id => {
    let favoritedItem = this.state.brands.find(item => {
      return item.id == id;
    });
    // console.log(favoritedItem.id);
    if (favoritedItem.like === undefined) {
      favoritedItem.like = false;
    }
    fetch(likeURL + `/${favoritedItem.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        like: !favoritedItem.like
      })
    })
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            brands: [
              ...this.state.brands.map(brand => {
                if (brand.id === res.id) {
                  return res;
                } else {
                  return brand;
                }
              })
            ]
          },
          () => console.log(this.state.brands)
        )
      );
  };

  render() {
    return (
      <div>
        {this.state.brands.length !== 0 ? (
          <Brands
            newBrands={this.state.brands}
            fetchAddedBrands={this.fetchAddedBrands}
            fetchSingleItem={this.fetchSingleItem}
            showDetailsId={this.state.showDetailsId}
            returnToCollection={this.returnToCollection}
            updateFavoritedItem={this.updateFavoritedItem}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
