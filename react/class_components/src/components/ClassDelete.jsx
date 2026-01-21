import { Component } from "react";

export default class ClassDelete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick} className="delete-btn">
        delete
      </button>
    );
  }
}
