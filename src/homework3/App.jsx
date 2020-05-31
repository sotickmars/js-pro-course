import React from "react";
import { Item } from "./Checked";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "Купить молоко", done: false, active: true },
        { name: "Купить хлеб", done: true, active: true },
        { name: "Купить масло", done: false, active: false },
      ],
    };
  }

  handleDone = (event) => {
    //  this.setState((list) => )
    //console.log(event.target.value);
  };

  render() {
    let listItems = this.state.list.map((element, i) => {
      return <Item key={element.id}></Item>;
    });
    return <ul>{listItems}</ul>;
  }
}
