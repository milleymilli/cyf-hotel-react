import React from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";
import FakeBookings from "./data/fakeBookings.json";
import FormButton from "./components/FormButton";
//import axios from "axios";

// const search = searchVal => {
//   console.log("TO DO!", searchVal);
//   // return `TO DO!, ${searchVal}`;
//   const Valerio = this.state.fakebookings.filter(obj =>
//     Object.values(obj).includes(searchVal)
//   );
//   this.setState({ fakeBookings: Valerio });
// };

class Bookings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakeBookings: FakeBookings,
      notFindMessage: ""
    };
    //this.search = this.search.bind(this);
  }
  // search = () => {};
  search = searchVal => {
    const num = parseInt(searchVal);
    const Valerio = this.state.fakeBookings.filter(obj => {
      return obj.id === num;
    });
    // console.log(Valerio);
    if (Valerio.length > 0) {
      this.setState({ fakeBookings: Valerio });
    } else {
      this.setState({ notFindMessage: "Not Found" });
    }
  };
  // componentDidMount() {

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(res => this.setState({ fakeBookings: res.data }))
  //     .error(err => "You have an error " + err);
  // }
  handleOnSubmit = event => {
    console.log(event); // const newItem = {
    //   id: this.state.todos.length + 1,
    //   title: e
    // }
    // const todos = [...this.state.todos];
    // todos.push(newItem);
    // this.setState({
    //   todos: todos
    // });
    // const milley = this.state.fakeBookings.join([...event.target.value]);
    // this.setState({
    //   fakeBookings: milley
    // });
  };
  render() {
    const messageStyle = {
      style: {
        color: "red"
      }
    };
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <FormButton onSubmit={this.handleOnSubmit} />
          <SearchResults
            message={this.state.notFindMessage}
            className={messageStyle}
            results={this.state.fakeBookings}
          />
        </div>
      </div>
    );
  }
}

export default Bookings;
