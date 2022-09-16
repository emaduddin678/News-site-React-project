import React, { Component } from "react";

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor Called");
    this.divRef = React.createRef();
  }

  componentDidMount() {
    console.log('componentdidMount Called');
    console.log("Mounted " ,this.divRef)
    console.log(this.divRef.current)
  }

  componentDidUpdate() {
    console.log("componentdidUpdate Called");
    console.log("Update  ", this.divRef);
    console.log(this.divRef.current);
  }

  render() {
    console.log("Render Called");
    console.log('Ref in render', this.divRef);
    return (
      <div ref={this.divRef}>
        <h3>React LifeCycle Methods</h3>
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Lifecycle;
