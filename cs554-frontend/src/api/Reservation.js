import * as axios from "axios";
import { getAuthToken } from "../firebase/FirebaseFunctions";

async function createReservation(restaurantId, reservationTime) {
  const token = await getAuthToken();
  await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `mutation createReservation($data: ReservationCreateInput!){
        createReservation(data: $data) {
                id
              }
            }`,
      variables: {
        data: { restaurantId, reservationTime },
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

async function findReservations() {
  const token = await getAuthToken();
  const { data } = await axios.post(
    "http://localhost:3000/graphql",
    {
      query: `query {
        findReservationsByUser {
            restaurant {
                id
                name
                location
            }
            reservationTime
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

export { createReservation, findReservations };
