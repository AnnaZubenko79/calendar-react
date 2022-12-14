import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, events, deleteEvent }) => (
  <section className="calendar">
    <Navigation weekDates={weekDates} />
    <div className="calendar__body">
      <div className="calendar__week-container">
        <Sidebar />
        <Week deleteEvent={deleteEvent} weekDates={weekDates} events={events} />
      </div>
    </div>
  </section>
);

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
export default Calendar;
