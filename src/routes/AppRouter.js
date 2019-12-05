import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {connect} from "react-redux";
import createHistory from 'history/createBrowserHistory';
import Home from "../components/Home";
//import Header from "../components/Header"; For Private Routing
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import CheckIn from "../components/CheckIn";
import InFlight from "../components/InFlight";
import EditPassenger from "../components/EditPassenger";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import "bootstrap/dist/css/bootstrap.css";

export const history = createHistory();

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <div>
        { /* For Private Routing <Header/> */}
        <Switch>
          <PublicRoutes path="/" component={LoginPage} exact={true} />
          <PrivateRoutes path="/home" component={Home} exact={true} />
          <PrivateRoutes path="/checkin/:flightid" component={CheckIn} exact={true} />
          <PrivateRoutes
            path="/checkin/:flightid/edit/:id"
            component={EditPassenger}
            exact={true}
          />
          <PrivateRoutes path="/inflight" component={InFlight} />
          <Route component={NotFoundPage}/>
        </Switch>
        <footer>
          <p className="lead footer-txt text-center text-secondary">
            All Rights Reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};
export { AppRouter as default };
