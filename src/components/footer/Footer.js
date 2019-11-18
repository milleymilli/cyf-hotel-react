import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          {this.props.foot.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
        </ul>
      </div>
    );
  }
}
