import React, { Children } from 'react';
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

export default Day;
