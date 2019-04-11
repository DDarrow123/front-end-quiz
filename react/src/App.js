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

  render() {
    return (
      <div>
        <h1 className="App-welcome">Welcome!</h1>
        {this.state.brands.length !== 0 ? (
          <Brands newBrands={this.state.brands} />
        ) : null}
      </div>
    );
  }
}

export default App;
