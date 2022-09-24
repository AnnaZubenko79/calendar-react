import React from 'react';
import Day from '../day/Day';
import RedLine from '../redline/RedLine';
import './week.scss';

const Week = ({ weekDates, events, deleteEvent }) => (
  <div className="calendar__week">
    {weekDates.map(dayStart => {
      const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

      const dayEvents = events.filter(
        event => new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < dayEnd,
      );

      return (
        <Day
          key={dayStart.getDate()}
          dataDay={dayStart.getDate()}
          dayEvents={dayEvents}
          events={events}
          deleteEvent={deleteEvent}
        >
          {new Date().getDate() === dayStart.getDate() && <RedLine />}
        </Day>
      );
    })}
  </div>
);

export default Week;
