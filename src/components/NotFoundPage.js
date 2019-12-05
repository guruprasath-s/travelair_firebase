import React, { Component } from "react";
import { Alert } from "reactstrap";
export default class NotFoundPage extends Component {
    render() {
        return (
        <Alert color="danger" className='text-center'>
          The page you are looking is not found.
        </Alert>
        )
    }
}