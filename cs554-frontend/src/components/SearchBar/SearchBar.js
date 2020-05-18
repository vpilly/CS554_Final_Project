import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const SearchBar = (props) => {
  const [date, setDate] = useState(props.date || new Date());
  const handleChange = (date) => {
    setDate(date);
    props.onChange(date);
  };

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <div className="control">
      <div className={`button ${sizeClass} `}>
        <label htmlFor="reservationTime">Reservation Time:</label>
        <br></br>
        <DatePicker
          id="reservationTime"
          value={date}
          selected={date}
          minDate={moment().toDate()}
          dateFormat="MMMM d, yyyy"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
