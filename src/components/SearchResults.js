import React from "react";
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: []
    };
  }

  togglerey(selectedRow) {
    //console.log(this.state.selectedId);
    if (this.state.selectedId.includes(selectedRow)) {
      const arr = [...this.state.selectedId];
      //copying using a spreed operator
      const indexof = arr.indexOf(selectedRow);
      arr.splice(indexof, 1);
      this.setState({ selectedId: arr });
      //console.log(this.state.selectedId);
    } else {
      const arr = [...this.state.selectedId];
      //copying using a spreed operator
      arr.push(selectedRow);
      this.setState({ selectedId: arr });
      //console.log(this.state.selectedId);
    }
  }

  render() {
    const tableHeadStyle = {
      backgroundColor: "black",
      color: "#ff0004"
    };

    //const tableHead = Object.keys(this.props.results[0]);

    const tableBody = this.props.results.map(obj => {
      return (
        <tr
          style={
            this.state.selectedId.includes(obj.id)
              ? {
                  border: "3px solid gray",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  fontWeight: "bold"
                }
              : { backgroundColor: "" }
          }
          onClick={() => this.togglerey(obj.id)}
          key={obj.id}
        >
          <td>{obj.id}</td>
          <td>{obj.title}</td>
          <td>{obj.firstName}</td>
          <td>{obj.surname}</td>
          <td>{obj.email}</td>
          <td>{obj.roomId}</td>
          <td>{obj.checkInDate}</td>
          <td>{obj.checkOutDate}</td>
        </tr>
      );
    });
    return (
      <div>
        <p style={{ color: "red", float: "left" }}>{this.props.message}</p>
        <table className="table">
          <thead>
            {/* <tr style={tableHeadStyle}>
              {tableHead.map((kk, i) => {
                return <th key={i}>{kk.toUpperCase()}</th>;
              })}
            </tr> */}
            <tr style={tableHeadStyle}>
              <th>ID</th>
              <th>TITLE</th>
              <th>FIRST-NAME</th>
              <th>SURNAME</th>
              <th>EMAIL</th>
              <th>ROOM-ID</th>
              <th>CHECK-IN-DATE</th>
              <th>CHECK-OUT-DATE</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    );
  }
}
export default SearchResults;
