import React, { Component } from "react";

class ContactList extends Component {
  state = {};

  render() {
    return <div>{this.props.contactList}</div>;
  }
}

export default ContactList;
