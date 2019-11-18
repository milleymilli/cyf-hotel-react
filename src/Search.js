import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputIds: ""
    };
    this.handlesearchInputIds = this.handlesearchInputIds.bind(this);
    this.handlesearchInputNames = this.handlesearchInputNames.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlesearchInputNames(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ searchInputNames: value });
  }

  handlesearchInputIds(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({
      searchInputIds: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const serchVal = this.state.searchInputIds;
    this.props.search(serchVal);
    //const messageMilley = this.props.search(serchVal);
    //alert(messageMilley);
  }

  render() {
    const { searchInputIds } = this.state;
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              className="form-group search-box"
              onSubmit={this.handleSubmit}
            >
              <div>
                <label htmlFor="customerName">Customer Ids</label>
                <div className="search-row">
                  <input
                    type="text"
                    id="customerName"
                    className="form-control"
                    placeholder="Customer Ids"
                    value={this.state.searchInputIds}
                    onChange={this.handlesearchInputIds}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => this.props.search(searchInputIds)}
                  >
                    Search Ids
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
