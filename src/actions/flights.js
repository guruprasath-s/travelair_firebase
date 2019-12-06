import database from "../firebase/firebase";
import FlightList from "../fixtures/flights";
import { history } from "../routes/AppRouter";

const startAddPassenger = (passenger,flightId)=>{
  return (dispatch)=>{
    return database.ref(`flights/${flightId}/passengers`).push(passenger).then((ref)=>{
      console.log("passenger updated");
      dispatch(ADD_PASSENGER({...passenger,id:ref.key},flightId));
    })
  }
}

const ADD_PASSENGER = (passenger, flightId) => {
  return {
    type: "ADD_PASSENGER",
    passenger,
    flightId
  };
};

const REMOVE_PASSENGER = (PassengerId, flightId) => {
  return {
    type: "REMOVE_PASSENGER",
    PassengerId,
    flightId
  };
};

const startRemovePassenger = (PassengerId, flightId) => {
  return dispatch => {
    database
      .ref(`flights/${flightId}/passengers/${PassengerId}`)
      .remove()
      .then(() => {
        dispatch(REMOVE_PASSENGER(PassengerId, flightId));
      });
  };
};

const EDIT_PASSENGER = (PassengerId, passenger, flightId) => {
  return {
    type: "EDIT_PASSENGER",
    PassengerId,
    flightId,
    passenger
  };
};

const startEditPassenger = (PassengerId, passenger, flightId) => {
  return dispatch => {
    database
      .ref(`flights/${flightId}/passengers/${PassengerId}`)
      .update(passenger)
      .then(() => {
        dispatch(EDIT_PASSENGER(PassengerId, passenger, flightId));
      });
  };
};

const setFlights = flights => {
  return {
    type: "SET_FLIGHTS",
    flights
  };
};
const startSetFlights = () => {
  return dispatch => {
    return database
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
        dispatch(setFlights(flights));
      });
  };
};

//Setting up data to firebase
const setFirebaseData = () => {
  const flightsData = {};
  FlightList.flights.forEach(({ id, travel, time, passengers, totalseats }) => {
    flightsData[id] = { travel, time, totalseats, passengers };
    let passengersData = [];
    passengers.forEach(({ id, name, ancillary, Age, seat }) => {
      passengersData[id] = { name, ancillary, Age, seat };
    });
    flightsData[id].passengers = passengersData;
  });
  database
    .ref(`flights`)
    .set(flightsData)
    .then(() => {
      alert("Data Reset Successfull!");
    })
    .then(() => {
      window.location.reload();
    })
    .catch(() => {
      alert("Oops Error!");
    });
};

export {
  REMOVE_PASSENGER,
  EDIT_PASSENGER,
  ADD_PASSENGER,
  startSetFlights,
  startRemovePassenger,
  startEditPassenger,
  setFirebaseData,
  startAddPassenger
};
