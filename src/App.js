import React, { Component } from "react";
import axios from "axios";
import Contact from "./components/Contact.js";
import ContactList from "./components/ContactList.jsx";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    hits: [],
    isLoading: false,
    error: null,
    online: 1
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then(result => {
        this.setState({
          hits: result.data.results,
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  applyRandomOnline = () => {
    var online = Math.floor(Math.random() * 2 + 1);
    return online === 1 ? true : false;
  };

  mapOverState = () =>
    this.state.hits.map((randomUser, index) => (
      <Contact
        online={this.applyRandomOnline()}
        key={index}
        image={randomUser.picture.medium}
        firstName={randomUser.name.first}
        lastName={randomUser.name.last}
      />
    ));

  render() {
    return (
      <div>
        <ContactList contactList={this.mapOverState()} />
      </div>
    );
  }
}

export default App;
