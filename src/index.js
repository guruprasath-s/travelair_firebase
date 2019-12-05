import React, { Component } from "react";
import ReactDom, { render } from "react-dom";
import { Provider } from "react-redux";
import database, { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import { startSetFlights } from "./actions/flights";
import { login, logout } from "./actions/auth";
import Header from "./components/InFlight";
import "./styles.css";

/* class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
} */

const store = configureStore();
const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    render(App, document.getElementById("root"));
    hasRendered = true;
  }
};

const LoadingGuage = () => {
  return (
    <div className="loading-cont">
      <div className="loading" />
    </div>
  );
};

render(<LoadingGuage />, document.getElementById("root"));

store.subscribe(() => {
  console.log(store.getState());
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(startSetFlights()).then(() => {
      store.dispatch(login(user.uid));
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
    });
    /* store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push("/home");
    } */
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

/* database
  .ref("flights")
  .once("value")
  .then(snapshot => {
    const flights = [];
    snapshot.forEach(childSnapshot => {
      var passengers = [];
      childSnapshot.child("passengers").forEach(innerChildSnapshot => {
        passengers.push({
          id: innerChildSnapshot.key,
          ...innerChildSnapshot.val()
        });
      });
      flights.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
        passengers
      });
    });
    console.log(flights);
  }); */
