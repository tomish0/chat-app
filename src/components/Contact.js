import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="Contact">
        <img src={this.props.image} className="avatar" alt="user" />
        <div>
          <h2 className="name">
            {this.props.firstName} {this.props.lastName}
          </h2>
          {this.contactOnline(true)}
        </div>
      </div>
    );
  }

  contactOnline = online => {
    if (online) {
      return (
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">Online</p>
        </div>
      );
    } else {
      return (
        <div className="status">
          <div className="status-offline"></div>
          <p className="status-text">Offline</p>
        </div>
      );
    }
  };
}

export default Contact;
