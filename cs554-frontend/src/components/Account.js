import React, { useContext } from "react";
import SignOutButton from "./SignOut";
import CreateResButton from "./CreateRestaurant";
import "../App.css";
import { AuthContext } from "../firebase/Auth";

function Account() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <h2>Account Page</h2>
      {/* <ChangePassword /> */}
      <CreateResButton />
      <SignOutButton />
    </div>
  );
}

export default Account;
