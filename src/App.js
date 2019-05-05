import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Experience from "./components/experience";

class App extends Component {
  state = {
    displayExperience: false
  };
  OnExperienceClick = () => {
    this.setState({
      displayExperience: !this.state.displayExperience
    });
  };
  RenderExperience() {
    if (this.state.displayExperience) {
      return <Experience />;
    }
  }
  render() {
    return (
      <div className="App">
        <nav  align="center">
          <NavBar OnExperienceClick={this.OnExperienceClick} />
        </nav>
        <section>
          {this.RenderExperience()}
          <div>
          Hello sir
          </div>
          
        </section>
      </div>
    );
  }
}

export default App;
