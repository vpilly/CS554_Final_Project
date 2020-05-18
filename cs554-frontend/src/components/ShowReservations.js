import React from "react";
import { findReservations } from "../api/Reservation";

class ReservationComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserves: [],
    };
  }

  componentDidMount() {
    this.getReservations();
  }

  async getReservations() {
    try {
      const results = await findReservations();
      console.log(results);
      this.setState({
        reserves: results.data.findReservationsByUser,
      });
    } catch (e) {
      console.log(`error ${e}`);
    }
  }

  render() {
    const { reserves } = this.state;
    return (
      <table>
        <th className="w-2">Restaurant Name |</th>
        <th className="w-2">Restaurant Location |</th>
        <th className="w-2">Reservation Time |</th>
        {reserves.map((element) => {
          return (
            <tr>
              <td>{element.restaurant.name}</td>
              <td>{element.restaurant.location}</td>
              <td>{element.reservationTime}</td>
            </tr>
          );
        }) || "No Reservations"}
      </table>
    );
  }
}

export default ReservationComp;
