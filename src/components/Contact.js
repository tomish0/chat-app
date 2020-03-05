import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  state = {
    online: this.props.online
  };

  render() {
    return (
      <div className="Contact">
        <img src={this.props.image} className="avatar" alt="user" />
        <div>
          <h2 className="name">
            {this.props.firstName} {this.props.lastName}
          </h2>
          {this.contactOnline()}
        </div>
      </div>
    );
  }

    contactOnline = () => {
      if (this.state.online) {
        return (
          <div className="status">
            <div className="status-online"></div>
            <button className="status-text" onClick={() => this.setState({online: false})}>Online</button>
          </div>
        );
      } else {
        return (
          <div className="status">
            <div className="status-offline"></div>
            <button className="status-text" onClick={() => this.setState({online: true})}>Offline</button>
          </div>
        );
      }
    };
}

export default Contact;
