import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Button, Jumbotron } from "reactstrap";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => {
  return (
    <>
      <Helmet>
        <title>Login Page - Travel Air</title>
      </Helmet>
      <Jumbotron>
        <h1 className="display-7 text-center">
          Welcome to TravelAir Flight Onboarding WebApp
        </h1>
      </Jumbotron>
      <div className="LoginCont">
        <Button color="primary" onClick={startLogin} size="lg">
          Login to APP via Google
        </Button>
      </div>
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
