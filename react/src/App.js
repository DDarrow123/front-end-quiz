import React, { Component } from "react";
import "./App.css";
import Brands from "./Brands";

const URL = "http://localhost:3001/browse";
const itemURL = "http://localhost:3001/item";
const likeURL = "http://localhost:3001/like";

class App extends Component {
  state = {
    brands: [],
    renderedItem: null
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
    // const start = this.state.brands.length ? this.state.brands.length - 1 : 0;
    console.log(this.state.brands.length);
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
    //Note: can also fetch by id but I chose to use the array of items I already had fetched
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
        renderedItem: selectedItem
      },
      () => console.log(this.state.renderedItem)
    );
  };

  returnToCollection = () => {
    this.setState({
      renderedItem: null
    });
  };

  render() {
    return (
      <div>
        {this.state.brands.length !== 0 ? (
          <Brands
            newBrands={this.state.brands}
            fetchAddedBrands={this.fetchAddedBrands}
            fetchSingleItem={this.fetchSingleItem}
            renderedItem={this.state.renderedItem}
            returnToCollection={this.returnToCollection}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
