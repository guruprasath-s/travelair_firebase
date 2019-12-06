import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Alert,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class PassengerForm extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onAncillaryChange = this.onAncillaryChange.bind(this);
    this.onSeatChange = this.onSeatChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: props.passenger.name ? props.passenger.name : "",
      age: props.passenger.Age ? props.passenger.Age : "",
      ancillary: props.passenger.ancillary ? props.passenger.ancillary : "",
      seat: props.passenger.seat ? props.passenger.seat : "",
      error: ""
    };
  }
  onNameChange(e) {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }
  onAgeChange(e) {
    const age = e.target.value;
    this.setState(() => ({ age }));
  }
  onAncillaryChange(e) {
    const ancillary = e.target.value;
    this.setState(() => ({ ancillary }));
  }
  onSeatChange(e) {
    const seat = e.target.value;
    this.setState(() => ({ seat }));
  }
  onSubmit(e) {
    e.preventDefault();

    if (!this.state.name || !this.state.age || !this.state.seat) {
      this.setState(() => ({ error: "Please provide name,age and seat." }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        name: this.state.name,
        Age: this.state.age,
        seat: this.state.seat,
        ancillary: this.state.ancillary
      });
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            placeholder="Name"
            autoFocus
            className="text-input"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Age</Label>
          <Input
            type="text"
            placeholder="Age"
            className="text-input"
            value={this.state.age}
            onChange={this.onAgeChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Ancillary</Label>
          <Input
            type="text"
            placeholder="Ancillary"
            className="text-input"
            value={this.state.ancillary}
            onChange={this.onAncillaryChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Seat Number</Label>
          <Input
            type="text"
            placeholder="Seat"
            className="text-input"
            value={this.state.seat}
            onChange={this.onSeatChange}
          />
        </FormGroup>
        <div>
          <Button color="success">Save Passenger</Button>
        </div>
      </form>
    );
  }
}
