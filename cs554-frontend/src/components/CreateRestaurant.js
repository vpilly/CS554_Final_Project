import React from "react";
import { createRestaurant } from "../api/Restaurant";

class RestaurantForm extends React.Component {
  state = {
    name: "",
    description: "",
    location: "",
    foodType: "",
    openingTime: "",
    closingTime: "",
    pricing: "cheap",
    menu: [{ item: "", price: "" }],
  };

  addMenuItem = (event) => {
    this.setState((prevState) => ({
      menu: [...prevState.menu, { item: "", price: null }],
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const hoursOpen = `${this.state.openingTime}-${this.state.closingTime}`;
    await createRestaurant(
      this.state.name,
      this.state.description,
      this.state.location,
      this.state.foodType,
      hoursOpen,
      this.state.pricing,
      this.state.menu
    );
  };

  onChange = (event) => {
    if (["item", "price"].includes(event.target.className)) {
      let menu = [...this.state.menu];
      menu[event.target.dataset.id][event.target.className] =
        event.target.value;
      this.setState({ menu });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const {
      name,
      description,
      location,
      foodType,
      openingTime,
      closingTime,
      pricing,
      menu,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.onChange}>
        <label htmlFor="name"> Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Restaurant Name"
          value={name}
          required
        />
        <br></br>
        <label htmlFor="description"> Description</label>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="Restaurant Description"
          value={description}
          required
        />
        <br></br>
        <label htmlFor="location"> Location: </label>
        <input
          name="location"
          id="location"
          type="text"
          placeholder="Restaurant Location"
          value={location}
          required
        />
        <br></br>
        <label htmlFor="foodType"> Food Type: </label>
        <input
          name="foodType"
          id="foodType"
          type="text"
          placeholder="Type of Food"
          value={foodType}
          required
        />
        <br></br>
        <label htmlFor="openingTime"> Opening Time: </label>
        <input
          name="openingTime"
          id="openingTime"
          type="time"
          value={openingTime}
          required
        />
        <br></br>
        <label htmlFor="closingTime"> Closing Time: </label>
        <input
          name="closingTime"
          id="closingTime"
          type="time"
          value={closingTime}
          required
        />
        <br></br>
        <label htmlFor="pricing">Pricing: </label>
        <select id="pricing" name="pricing" value={pricing}>
          <option value="cheap">Cheap</option>
          <option value="moderate">Moderate</option>
          <option value="expensive">Expensive</option>
        </select>
        <br></br>
        <label>Menu: </label>
        <OrderMenu orderMenuItems={menu}></OrderMenu>
        <button type="button" onClick={this.addMenuItem}>
          +
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const OrderMenu = ({ orderMenuItems }) => {
  return orderMenuItems.map((orderMenuItem, index) => {
    const itemId = `item-${index}`;
    const priceId = `price-${index}`;
    return (
      <div key={index}>
        <div>
          <label htmlFor={itemId}>Item: </label>
          <input
            type="text"
            name={itemId}
            data-id={index}
            id={itemId}
            value={orderMenuItem.item}
            className="item"
          ></input>
        </div>
        <div>
          <label htmlFor={priceId}>Price: </label>
          <input
            type="number"
            name={priceId}
            data-id={index}
            id={priceId}
            step="0.01"
            min="0"
            value={orderMenuItem.price}
            className="price"
          ></input>
        </div>
      </div>
    );
  });
};

export default RestaurantForm;
