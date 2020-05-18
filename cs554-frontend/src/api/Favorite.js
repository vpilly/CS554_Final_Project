import * as axios from "axios";
import { getAuthToken } from "../firebase/FirebaseFunctions";

async function createFavorite(restaurantId) {
  const token = await getAuthToken();
  await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `mutation createFavorite($data: FavoriteCreateInput!){
        createFavorite(data: $data) {
              id
            }
          }`,
      variables: {
        data: { restaurantId },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
}

async function deleteFavorite(restaurantId) {
  const token = await getAuthToken();
  await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `mutation deleteFavorite($restaurantId: String!){
            deleteFavorite(restaurantId: $restaurantId)
            }`,
      variables: {
        restaurantId,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
}

export { createFavorite, deleteFavorite };
