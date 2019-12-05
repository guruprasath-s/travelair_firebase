import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoutes = ({isAuthenticated,component:Component,...rest})=>{
  return(<Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/home" />
      ) : (
          <Component {...props} />
        )
    )} />);
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoutes);