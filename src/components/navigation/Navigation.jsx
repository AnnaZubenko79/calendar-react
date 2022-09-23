import React from 'react';
import DayLable from './DayLabel.jsx';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map(dayDate => (
      <div key={dayDate.getDate()} className="calendar__day-label day-label">
        <DayLable key={Math.random().toString(16)} dayDate={dayDate} />
      </div>
    ))}
  </header>
);

export default Navigation;
