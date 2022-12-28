import React, { Component } from 'react'
import CheckHealth from '../health/CheckHealth';
import Notifications from './Notifications'
import GPS from './GPS';
import Appointment from './Appointment';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CheckHealth />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
          <div className="col s12 m5 offset-m1">
            <GPS />
          </div>
          <div className="col s12 m5 offset-m1">
            <Appointment />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
