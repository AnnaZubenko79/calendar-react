import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ currentWeek, nextWeek, prevWeek, month, showModal }) => (
  <header className="header">
    <button className="button create-event-btn" onClick={showModal}>
      <i className="fas fa-plus create-event-btn__icon"></i>
      Create
    </button>
    <div className="navigation">
      <button className="navigation__today-btn button" onClick={currentWeek}>
        Today
      </button>
      <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">{month}</span>
    </div>
  </header>
);
Header.propTypes = {
  currentWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  showModal: PropTypes.func,
};
export default Header;
