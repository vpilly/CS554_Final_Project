// Search Page /search
import NavBar from "../NavBar/NavBar";
import ResultsSummary from "./ResultsSummary/ResultsSummary";
import SearchResults from "./SearchResults/SearchResults";

import React, { Component } from "react";
import { getRestaurantByFilter } from "../../api/Restaurant";
import { deleteFavorite, createFavorite } from "../../api/Favorite";
import { createReservation } from "../../api/Reservation";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restraunts: [],
      foodType: null,
      pricing: null,
      reservationTime: new Date(),
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

  handleFavoriteChange = async (event) => {
    const { restraunts } = this.state;
    const restraunt = restraunts.find(({ id }) => event.target.value === id);
    if (restraunt.isFavorite) {
      await deleteFavorite(restraunt.id);
    } else {
      await createFavorite(restraunt.id);
    }

    restraunt.isFavorite = !restraunt.isFavorite;
    this.setState({ restraunts });
  };

  handleRestrauntSelection = async (event) => {
    createReservation(event.target.value, this.state.reservationTime);
  };

  handleResevationCreation = async (event) => {
    this.setState({ reservationTime: event });
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
    const dateParam = new Date();
    const { restraunts } = this.state;
    return (
      <div>
        <NavBar date={dateParam} onChange={this.handleResevationCreation} />
        <ResultsSummary
          count={this.state.restraunts.length}
          onFilterClear={this.handleClearFilters}
          onFilterChange={this.handleFilterChange}
        />
        <SearchResults
          restraunts={restraunts}
          onFavoriteChange={this.handleFavoriteChange}
          onSelectionChange={this.handleRestrauntSelection}
        />
      </div>
    );
  }
}

export default Search;
