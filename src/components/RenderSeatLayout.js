import React from "react";
import { connect } from "react-redux";
import { times } from "lodash";
import {
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input
} from "reactstrap";
import RenderSeats from "../components/RenderSeats";
import { SEAT_ALLOCATION, SET_ALLOCATEDSEAT } from "../actions/flights";

class RenderSeatLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeatClick = this.handleSeatClick.bind(this);
    this.handleSeatSubmit = this.handleSeatSubmit.bind(this);
    this.handleSelectOnChange = this.handleSelectOnChange.bind(this);
    this.handleModelClose = this.handleModelClose.bind(this);
    const pid = this.props.flight.passengers[0].id || null;
    this.state = {
      modal: false,
      selectVal: null,
      selectPassengerId: pid,
      seatNumber: null,
      seatAllocated: null,
      unAllocatedSeat: null
    };
  }
  handleSeatClick(e) {
    e.persist();
    this.setState(
      prevState => {
        return {
          modal: !prevState.modal,
          seatNumber: e.target.getAttribute("seatno")
        };
      },
      () => {
        e.target.className = e.target.className + " active";
      }
    );
  }
  handleModelClose(e) {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  }
  handleSeatSubmit(e) {
    console.log(this.state.selectPassengerId);
    this.props.dispatch(
      SEAT_ALLOCATION(
        this.state.seatNumber,
        this.props.flight.id,
        this.state.selectPassengerId
      )
    );
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  }
  handleSelectOnChange(e) {
    e.persist();
    var index = e.target.selectedIndex;
    var optionElement = e.target.childNodes[index];
    var optionAttr = optionElement.getAttribute("pid");
    this.setState(
      { selectVal: e.target.value, selectPassengerId: optionAttr },
      () => {
        console.log(this.state.selectPassengerId);
      }
    );
  }
  componentDidMount() {
    const allocatedseat = this.props.flight.passengers.map(passenger => {
      return passenger.seat;
    });

    this.setState(
      prevState => {
        return {
          seatAllocated: allocatedseat.length,
          unAllocatedSeat: this.props.flight.totalseats - allocatedseat.length
        };
      },
      () => {
        this.props.dispatch(
          SET_ALLOCATEDSEAT(
            this.state.seatAllocated,
            this.state.unAllocatedSeat,
            this.props.flight.id
          )
        );
        console.log(this.state);
      }
    );
  }
  render() {
    let seats = [];
    const allocatedseat = this.props.flight.passengers.map(passenger => {
      return passenger.seat;
    });
    return (
      <>
        <h6 className="seatLayout-title text-center">Seat Layout</h6>
        <div className="seatCount">
          <div className="seatAllo">
            Allocated:{" "}
            <Badge color="success">{this.props.flight.allocatedseats}</Badge>
          </div>
          <div className="seatUnAllo">
            UnAllocated:{" "}
            <Badge color="info">{this.props.flight.unallocatedseats}</Badge>
          </div>
        </div>
        <div className="seatLayout">
          {times(this.props.flight.totalseats, i => {
            seats.push(
              <RenderSeats
                key={i}
                number={i}
                handleSeatClick={this.handleSeatClick}
                allocatedseat={allocatedseat}
              />
            );
          })}
          {seats}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.handleSeatClick}>
          <ModalHeader toggle={this.handleSeatClick}>
            Select Passenger
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input
                type="select"
                name="select"
                id="passengerSelect"
                onChange={this.handleSelectOnChange}
              >
                {this.props.flight.passengers.map(passenger => {
                  return (
                    <option
                      pid={passenger.id}
                      disabled={
                        this.state.seatNumber == passenger.seat
                          ? "disabled"
                          : undefined
                      }
                    >
                      {passenger.name} - id({passenger.id})
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSeatSubmit}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.handleModelClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default connect()(RenderSeatLayout);
