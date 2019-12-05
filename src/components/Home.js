import React from "react";
import FlighList from "../fixtures/flights";
import { connect } from "react-redux";
import { Jumbotron, Table, Button } from "reactstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { startSetFlights } from "../actions/flights";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickGroup = this.handleClickGroup.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }
  handleClickGroup(e) {
    const flightId = e.target.value;
    this.props.history.push(`/checkin/${flightId}`);
  }
  makeRequest() {
    //this.props.dispatch(startSetFlights());
  }
  componentDidMount() {
    this.makeRequest();
  }
  render() {
    const data = FlighList.flights;
    const columns = [
      {
        Header: "Flight Id",
        accessor: "id",
        Cell: ({ original }) => (
          <Button
            color="info"
            value={original.id}
            onClick={this.handleClickGroup}
          >
            {original.id}
          </Button>
        )
      },
      {
        Header: "Travel Between",
        accessor: "travel"
      },
      {
        Header: "Time",
        accessor: "time"
      }
    ];
    return (
      <>
        <Jumbotron>
          <h1 className="display-7">
            Welcome to TravelAir Flight Onboarding WebApp
          </h1>
        </Jumbotron>
        <div>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={3}
            pageSizeOptions={[3, 6]}
          />
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
export default connect(mapStateToProps)(Home);

//export { Home as default };
