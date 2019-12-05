import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
class RenderPassengerCard extends React.Component {
  constructor(props) {
    super(props);
    this.removePassenger = this.removePassenger.bind(this);
    this.editPassenger = this.editPassenger.bind(this);
  }
  removePassenger() {
    this.props.removePassenger(this.props.passenger.id);
  }
  editPassenger() {
    this.props.editPassenger(this.props.passenger.id);
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>Name: {this.props.passenger.name}</CardTitle>
          <CardSubtitle>Age: {this.props.passenger.Age}</CardSubtitle>
          <CardText>Services: {this.props.passenger.ancillary}</CardText>
          <p>
            Seat Number{" "}
            <Badge color="success">{this.props.passenger.seat}</Badge>
          </p>
          <Link
            className="list-item"
            to={`/checkin/${this.props.flightId}/edit/${
              this.props.passenger.id
            }`}
          >
            <Button color="primary">Edit</Button>
          </Link>{" "}
          <Button color="danger" onClick={this.removePassenger}>
            Remove
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export { RenderPassengerCard as default };
