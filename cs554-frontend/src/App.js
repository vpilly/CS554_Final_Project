import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/Account";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./firebase/Auth";
import Search from "./components/Search/Search";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
        </div>
        <PrivateRoute exact path="/" component={Search} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/account" component={Account} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
