import FlightList from "../fixtures/flights";

const flights = (state = [], action) => {
  switch (action.type) {
    case "ADD_PASSENGER":
      return state.map(flight => {
        if (flight.id == action.flightId) {
          flight.passengers = [...flight.passengers,action.passenger];
          return flight;
        } else return flight;
      });
    case "REMOVE_PASSENGER":
      return state.map(flight => {
        if (flight.id == action.flightId) {
          const passengers = flight.passengers.filter(
            passenger => passenger.id !== action.PassengerId
          );
          flight.passengers = passengers;
          return flight;
        } else return flight;
      });
    case "EDIT_PASSENGER":
      return state.map(flight => {
        if (flight.id == action.flightId) {
          const passengers = flight.passengers.map(passenger => {
            if (passenger.id === action.PassengerId) {
              return { ...passenger, ...action.passenger };
            } else {
              return { ...passenger };
            }
          });
          flight.passengers = passengers;
          return flight;
        } else return flight;
      });
    case "SET_FLIGHTS":
      return [...action.flights];
    default:
      return state;
  }
};

export { flights as default };
