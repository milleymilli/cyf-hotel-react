import React, { Component } from "react";
import CustomerForm from "./CustomerForm";

export default class FormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }
  AddCutomer() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.AddCutomer()}>
          +
        </button>
        {this.state.clicked ? (
          <CustomerForm jjj={this.props.onSubmit()} />
        ) : null}
      </div>
    );
  }
}
