import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>{this.state.count}</h1>
          <button
            className="btn btn-success mx-3"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrement
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
