import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import { loadMyMovieList } from "./actions/index";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.loadMyMovieList();
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <SearchBox />
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" movies={this.props.searchResults} />
        <TitleList title="My Movies" movies={this.props.myMovieList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMyMovieList: () => dispatch(loadMyMovieList())
  };
}

App.PropTypes = {
  loadMyMovieList: PropTypes.func,
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
