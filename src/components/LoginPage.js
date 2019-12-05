import React from 'react';
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";
import { Button,Jumbotron } from "reactstrap";

const LoginPage = ({startLogin})=>{
  return (
    <>
      <Jumbotron>
        <h1 className="display-7 text-center">
          Welcome to TravelAir Flight Onboarding WebApp
        </h1>
      </Jumbotron>
      <div className="LoginCont">
      <Button color="primary" onClick={startLogin} size="lg">Login to APP via Google</Button>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined,mapDispatchToProps)(LoginPage);