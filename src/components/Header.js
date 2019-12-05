import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, Button } from "reactstrap";
import { startLogout } from "../actions/auth";
import { setFirebaseData } from "../actions/flights";
const Header = props => {
  return (
    <header>
      <Navbar color="light" light expand="md">
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/inflight">
              In Flight
            </NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={props.startLogout}>LogOut</Button>
          </NavItem>
          <NavItem>
            <Button color="danger" onClick={setFirebaseData}>
              Reset Data
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
