import React, { Component } from "react";
import axios from "axios";
import Contact from "./components/Contact.js"

const API = "https://randomuser.me/api/?results=3";

class App extends Component {
  state = {
    hits: [
      { name: { first: "", last: "" }, picture: { thumbnail: "" } },
      { name: { first: "", last: "" }, picture: { thumbnail: "" } },
      { name: { first: "", last: "" }, picture: { thumbnail: "" } }
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
      </div>
    );
  }
}

export default App;
