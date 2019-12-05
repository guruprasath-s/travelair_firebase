import React from "react";
import { connect } from "react-redux";
import { Jumbotron } from "reactstrap";
import { startEditPassenger } from "../actions/flights";
import PassengerForm from "../components/PassengerForm";

export class EditPassenger extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(passenger) {
    this.props.dispatch(
      startEditPassenger(
        this.props.match.params.id,
        passenger,
        this.props.match.params.flightid
      )
    );
    this.props.history.push(`/checkin/${this.props.match.params.flightid}`);
  }
  render() {
    const passengerId = this.props.match.params.id;
    const passenger = this.props.flight.passengers.find(
      passenger => passenger.id === passengerId
    );
    return (
      <div>
        <div className="page-header">
          <Jumbotron>
            <h1 className="display-3">Edit Passenger</h1>
          </Jumbotron>
        </div>
        <div className="content-container">
          <PassengerForm passenger={passenger} onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  flight: state.flights.find(
    flight => flight.id === props.match.params.flightid
  )
});

export default connect(mapStateToProps)(EditPassenger);
