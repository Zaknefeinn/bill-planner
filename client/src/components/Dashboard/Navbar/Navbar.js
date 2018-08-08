import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Navbar.css';
class Navbar extends Component {
  dropDown = () => {
    document.getElementById('dropDown').classList.toggle('show');
  };
  render() {
    return (
      <div className="Navbar">
        <div className="menu-container">
          <div onClick={this.dropDown} className="dropdown">
            <span className="drop-dots">
              <i className="fas fa-ellipsis-v" />
            </span>
            <div id="dropDown" className="dropdown-content">
              <a className="dropdown-item" onClick={this.props.logOut}>
                <span className="btn-icon">
                  <i className="fas fa-sign-out-alt" />
                </span>{' '}
                Log Out
              </a>
              <a className="dropdown-item">
                <span className="btn-icon">
                  <i className="fas fa-cog" />
                </span>
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

window.onclick = function(event) {
  // console.log(event.target);
  if (!event.target.closest('.dropdown')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
