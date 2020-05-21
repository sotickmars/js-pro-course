import React from "react";
export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  plusClick() {
    this.setState({ number: this.state.number + 1 });
  }

  minusClick() {
    this.setState({ number: this.state.number - 1 });
  }

  refreshClick() {
    this.setState({ number: 0 });
  }

  render() {
    return (
      <>
        <div class="wrapper">
          <div className="number">{this.state.number}</div>
          <div className="button">
            <div className="plus" onClick={() => this.plusClick()}>
              +
            </div>
            <div className="refresh" onClick={() => this.refreshClick()}>
              refresh
            </div>
            <div className="minus" onClick={() => this.minusClick()}>
              -
            </div>
          </div>
        </div>
      </>
    );
  }
}
