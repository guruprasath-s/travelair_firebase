import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Alert, Badge } from "reactstrap";
import { startRemovePassenger } from "../actions/flights";
import RenderPassengerCard from "../components/RenderPassengerCard";
class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.removePassenger = this.removePassenger.bind(this);
    this.state = { id: this.props.match.params.flightid };
  }
  removePassenger(id) {
    this.props.dispatch(startRemovePassenger(id, this.state.id));
  }
  render() {
    console.log(this.props);
    const id = this.state.id;
    const flights = this.props.flights || [];
    const flight = flights.filter(flight => flight.id === id);
    const passengers = flight.length ? flight[0].passengers : [];
    console.log(id);
    return (
      <>
        <Jumbotron>
          <h1 className="display-3" color="primary">
            Flight: {flight[0].id}
          </h1>
          <p className="lead">
            Travels Between: <b>{flight[0].travel}</b>
          </p>
          <p className="display-7">
            Total Seats: <Badge color="secondary">{flight[0].totalseats}</Badge>
          </p>
        </Jumbotron>
        <div className="passengers-cont">
          <h6 className="passengers-list-title">
            Passengers Travelling{" "}
            <Badge color="primary">{passengers.length}</Badge>
          </h6>
          <div className="flexCont">
            {flight.length ? (
              passengers.map(passenger => {
                return (
                  <RenderPassengerCard
                    passenger={passenger}
                    key={passenger.name}
                    removePassenger={this.removePassenger}
                    flightId={id}
                  />
                );
              })
            ) : (
              <Alert color="danger">
                Passenger List is Not Available for Flight {id}
              </Alert>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    flights: state.flights
  };
};

export default connect(mapStateToProps)(CheckIn);
