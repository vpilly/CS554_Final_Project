// Search Page /search
import NavBar from "../NavBar/NavBar";
import ResultsSummary from "./ResultsSummary/ResultsSummary";
import SearchResults from "./SearchResults/SearchResults";

import React, { Component } from "react";
import axios from "axios";
import { getRestaurantByFilter } from "../../api/Restaurant";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restraunts: [],
      foodType: null,
      pricing: null,
    };
  }

  componentDidMount() {
    this.getRest();
  }

  handleClearFilters = () => {
    this.setState({ foodType: null, pricing: null }, () => this.getRest());
  };

  handleFilterChange = (event) => {
    if ((event.target.className = "button")) {
      this.setState({ pricing: event.target.value }, () => this.getRest());
    } else {
      this.setState({ foodType: event.target.value }, () => this.getRest());
    }
  };

  handleFavoriteChange = (event) => {
    console.log(event);
    if ((event.target.className = "fas fa-star")) {
      // TODO: delete favorite
      const { restraunts } = this.state;
      const restraunt = restraunts.find(({ id }) => event.target.value);
      restraunt.isFavorite = false;
      this.setState({ restraunts });
    } else {
      //TODO: create favorite
      const { restraunts } = this.state;
      const restraunt = restraunts.find(({ id }) => event.target.value);
      restraunt.isFavorite = true;
      this.setState({ restraunts });
    }
  };

  async getRest() {
    try {
      const { data } = await getRestaurantByFilter(
        this.state.foodType,
        this.state.pricing
      );
      this.setState({
        restraunts: data.findAllRestaurantsByFilters,
      });
    } catch (e) {
      console.log(`error ${e}`);
    }
  }

  render() {
    const peopleParam = 0;
    const dateParam = new Date();
    const locationParam = "";
    const { restraunts } = this.state;
    return (
      <div>
        <NavBar
          people={peopleParam}
          date={dateParam}
          location={locationParam}
        />
        <ResultsSummary
          count={this.state.restraunts.length}
          onFilterClear={this.handleClearFilters}
          onFilterChange={this.handleFilterChange}
        />
        <SearchResults
          restraunts={restraunts}
          onFavoriteChange={this.handleFavoriteChange}
        />
      </div>
    );
  }
}

export default Search;
