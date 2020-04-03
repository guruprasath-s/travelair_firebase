import React from "react";
import { connect } from "react-redux";
import { Jumbotron, Alert, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { startRemovePassenger } from "../actions/flights";
import RenderPassengerCard from "../components/RenderPassengerCard";
import RenderSeatLayout from "../components/RenderSeatLayout";
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
    if (!flight.length) {
      return (
        <Alert className="text-center" color="danger">
          Flight Details for the Flight {id} is not found
        </Alert>
      );
    }
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
        <RenderSeatLayout flight={flight[0]} />
        <div className="passengers-cont">
          <h6 className="passengers-list-title">
            Passengers Travelling{" "}
            <Badge color="primary">{passengers.length}</Badge>
          </h6>
          {flight[0].passengers.length <= flight[0].totalseats ? (
            <div className="text-center">
              <Link className="text-center" to={`/checkin/${flight[0].id}/add`}>
                <Button>Add Passenger</Button>
              </Link>
            </div>
          ) : null}
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
