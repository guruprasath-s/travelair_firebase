import React from "react";
import { connect } from "react-redux";
import { Jumbotron,Badge } from "reactstrap";
import { startAddPassenger } from "../actions/flights";
import PassengerForm from "../components/PassengerForm";

export class AddPassenger extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(passenger) {
    this.props.dispatch(
      startAddPassenger(passenger,this.props.match.params.flightid)
    ).then(()=>{this.props.history.push(`/checkin/${this.props.match.params.flightid}`);})
    
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <Jumbotron>
            <h1 className="display-3">Add Passenger to flight {this.props.match.params.flightid ? <Badge color="secondary">{this.props.match.params.flightid}</Badge> : ""}</h1>
          </Jumbotron>
        </div>
        <div className="content-container">
          <PassengerForm passenger={{}} onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps)(AddPassenger);