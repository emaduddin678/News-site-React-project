import React, { Component } from "react";

export class Header extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headlines
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter To Search"
        />
      </div>
    );
  }
}

export default Header;
