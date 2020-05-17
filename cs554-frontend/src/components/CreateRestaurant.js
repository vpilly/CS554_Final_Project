import React from "react";
import { createRestaurant } from "../api/Restaurant";

const CreateRestButton = () => {
  return (
    <button type="button" onClick={createRestaurant}>
      test rest
    </button>
  );
};

export default CreateRestButton;
