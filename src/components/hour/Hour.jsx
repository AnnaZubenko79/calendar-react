import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, deleteEvent }) => {
  const eventHour = date =>
    `${new Date(date).getHours()}:${formatMins(new Date(date).getMinutes())}`;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, dateFrom, dateTo, title, date }) => {
        const eventStart = eventHour(dateFrom);
        const eventEnd = eventHour(dateTo);

        return (
          <Event
            key={id}
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            deleteEvent={deleteEvent}
            id={id}
            dateFrom={dateFrom}
            date={date}
          />
        );
      })}
    </div>
  );
};

export default Hour;
