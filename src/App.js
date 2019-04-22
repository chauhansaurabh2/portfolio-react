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
      displayExperience:!this.state.displayExperience
    })
  };
  RenderExperience(){
    if(this.state.displayExperience){
      return <Experience></Experience>
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-2" align="center">
            <NavBar OnExperienceClick={this.OnExperienceClick} />
          </div>
          <div className="col-10">
          {this.RenderExperience()}
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
