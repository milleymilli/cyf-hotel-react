import React, { Component } from "react";

export default class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    };
    // console.log(this.state);
  }
  handdleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };
  // handdleOnSubmit = () => {
  //   this.props.jjj(this.state);
  // };
  render() {
    return (
      <div>
        <form onSubmit={() => this.props.jjj(this.state)}>
          <label htmlFor="fname">First-Name</label>
          <input
            type="text"
            name="firstName"
            className="firstname"
            placeholder="Your First name.."
            value={this.state.firstName}
            onChange={this.handdleChange}
          />

          <label htmlFor="Surname">Surname</label>
          <input
            type="text"
            name="surname"
            className="lastname"
            placeholder="Your Last name.."
            value={this.state.surname}
            onChange={this.handdleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Your Emai Address.."
            value={this.state.email}
            onChange={this.handdleChange}
          />
          <label htmlFor="roomId">Room-Id</label>
          <input
            type="text"
            name="roomId"
            className="room-id"
            placeholder="Room Number.."
            value={this.state.roomId}
            onChange={this.handdleChange}
          />
          <label htmlFor="CheckInDate">Check-In-Date</label>
          <input
            type="text"
            name="checkInDate"
            className="Check-In-Date"
            placeholder="Date Of Today.."
            value={this.state.checkInDate}
            onChange={this.handdleChange}
          />
          <label htmlFor="CheckOutDate">Check-Out-Date</label>
          <input
            type="text"
            name="checkOutDate"
            className="Check-Out-Date"
            placeholder="Date Out"
            value={this.state.checkOutDate}
            onChange={this.handdleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
