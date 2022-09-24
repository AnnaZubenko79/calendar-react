import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const currentDate = new Date().getDate();
  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <div className="calendar__day-label day-label">
            <span
              className={
                dayDate.getDate() === currentDate &&
                days[dayDate.getDay()] === days[currentDay] &&
                dayDate.getMonth() === currentMonth
                  ? 'day-label__day-name day-label__day-name_current'
                  : 'day-label__day-name'
              }
            >
              {days[dayDate.getDay()]}
            </span>
            <span
              className={
                dayDate.getDate() === currentDate &&
                days[dayDate.getDay()] === days[currentDay] &&
                dayDate.getMonth() === currentMonth
                  ? 'day-label__day-number day-label__day-number_current'
                  : 'day-label__day-number '
              }
            >
              {dayDate.getDate()}
            </span>
          </div>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array,
  dayDate: PropTypes.object.isRequired,
};

export default Navigation;
