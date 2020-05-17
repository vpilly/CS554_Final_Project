import * as axios from "axios";
import { getAuthToken } from "../firebase/FirebaseFunctions";

async function createRestaurant() {
  const token = await getAuthToken();
  const { data } = await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `mutation {
        createRestaurant(data: {name: "front", description: "test", hoursOpen:"1-7", pricing: "cheap", foodType: "default", location:"here", menu: []}) {
            id
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
  console.log(data);
}

export { createRestaurant };
