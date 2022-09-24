import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import { hours } from '../../utils/dateUtils.js';

import './day.scss';

const Day = ({ children, dataDay, dayEvents, deleteEvent }) => (
  <div className="calendar__day" data-day={dataDay}>
    {children}
    {hours.map(hour => {
      const hourEvents = dayEvents.filter(event => new Date(event.dateFrom).getHours() === hour);

      return (
        <Hour
          key={dataDay + hour}
          dataHour={hour}
          hourEvents={hourEvents}
          deleteEvent={deleteEvent}
        />
      );
    })}
  </div>
);

Day.propTypes = {
  dataDay: PropTypes.number,
  dayEvents: PropTypes.array.isRequired,
};

export default Day;
