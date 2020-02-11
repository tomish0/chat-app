import React, { Component } from "react";
import axios from "axios";
import Contact from "./components/Contact.js";
import ContactList from "./components/ContactList.jsx";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    hits: [
      { name: { first: "", last: "" }, picture: { medium: "" } },
      { name: { first: "", last: "" }, picture: { medium: "" } },
      { name: { first: "", last: "" }, picture: { medium: "" } },
      { name: { first: "", last: "" }, picture: { medium: "" } },
      { name: { first: "", last: "" }, picture: { medium: "" } }
    ],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then(result => {
        console.log(result.data.results);
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

  render() {
    // console.log(this.state.hits);
    return (
      <div>
        <Contact
          image={this.state.hits[0].picture.medium}
          firstName={this.state.hits[0].name.first}
          lastName={this.state.hits[0].name.last}
        />
        <Contact
          image={this.state.hits[1].picture.medium}
          firstName={this.state.hits[1].name.first}
          lastName={this.state.hits[1].name.last}
        />
        <Contact
          image={this.state.hits[2].picture.medium}
          firstName={this.state.hits[2].name.first}
          lastName={this.state.hits[2].name.last}
        />
        <ContactList contactList={this.mapOverState()} />
      </div>
    );
  }

  mapOverState = () =>
    this.state.hits.map((randomUser, index) => (
      <Contact
        key={index}
        image={randomUser.picture.medium}
        firstName={randomUser.name.first}
        lastName={randomUser.name.last}
      />
    ));
}

export default App;
