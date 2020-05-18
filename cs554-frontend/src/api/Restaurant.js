import * as axios from "axios";
import { getAuthToken } from "../firebase/FirebaseFunctions";

async function createRestaurant(
  name,
  description,
  location,
  foodType,
  hoursOpen,
  pricing,
  menu
) {
  const token = await getAuthToken();
  const { data } = await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `mutation createRestraunt($data: RestaurantCreateInput!){
        createRestaurant(data: $data) {
            id
          }
        }`,
      variables: {
        data: {
          name,
          description,
          location,
          foodType,
          hoursOpen,
          pricing,
          menu: menu.map(({ item, price }) => ({ item, price: +price })),
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return data;
}

async function getAllRestaurant() {
  const token = await getAuthToken();
  const { data } = await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `query {
        findAllRestaurants {
            id
            name
            pricing
            description
            hoursOpen
            foodType
            location
          }
        }`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return data;
}

async function getRestaurantByFilter(foodType, pricing) {
  const token = await getAuthToken();
  const { data } = await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `query findAllRestaurantsByFilters($foodType: String, $pricing: String){
        findAllRestaurantsByFilters(foodType: $foodType, pricing: $pricing) {
            id
            name
            pricing
            description
            hoursOpen
            foodType
            location
            isFavorite
          }
        }`,
      variables: {
        foodType,
        pricing,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return data;
}

export { createRestaurant, getAllRestaurant, getRestaurantByFilter };
