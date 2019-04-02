import React, { Component } from "react";
import { connect } from "react-redux";
import { loadSearch } from "../actions/index";
import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={this.handleChange}
          onKeyUp={e => {
            /* this is so th search will only be done on enter key */
            if (
              this.props.loadSearch &&
              e.key === "Enter" &&
              this.state.searchTerm
            ) {
              this.props.loadSearch(this.state.searchTerm);
            }
          }}
          type="search"
          placeholder="Search for a title..."
          value={this.state.searchTerm}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadSearch: searchTerm => dispatch(loadSearch(searchTerm))
  };
}

SearchBox.PropTypes = {
  loadSearch: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
