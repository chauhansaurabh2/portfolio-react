import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="nav flex-column">
            <li>
              <img src="https://picsum.photos/200/300" className="img-fluid rounded"/>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.props.OnExperienceClick}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Education
              </a>
            </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
