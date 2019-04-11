import React, { Component } from "react";
import "./App.css";
import Brands from "./Brands";

const URL = "http://localhost:3001/browse";

class App extends Component {
  state = {
    brands: []
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

  render() {
    return (
      <div>
        <h1 className="App-welcome">Browse page</h1>
        {this.state.brands.length !== 0 ? (
          <Brands
            newBrands={this.state.brands}
            fetchAddedBrands={this.fetchAddedBrands}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
