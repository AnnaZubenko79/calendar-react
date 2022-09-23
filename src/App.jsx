import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';
import { createEvent, fetchEventsList, deleteEvent } from './gateway/events.js';
import { getWeekStartDate, generateWeekRange, getMonth } from './utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModalView, setModalView] = useState(false);
  const [events, setEvents] = useState([]);

  const togglePrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() - 7)));
  };

  const toggleCurrentWeek = () => {
    setWeekStartDate(new Date());
  };

  const toggleNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() + 7)));
  };

  const showModal = () => {
    setModalView(true);
  };
  const hideModal = () => {
    setModalView(false);
  };

  const getEventsList = () => {
    fetchEventsList()
      .then(eventsList => {
        setEvents(eventsList);
      })
      .catch(error => alert(error));
  };

  const onSubmit = (e, event) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = event;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => getEventsList());

    setModalView(false);
  };

  useEffect(() => {
    getEventsList();
  }, []);
  const onDeleteEvent = id => deleteEvent(id).then(() => getEventsList());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const month = getMonth(weekStartDate);
  return (
    <>
      <Header
        currentWeek={toggleCurrentWeek}
        nextWeek={toggleNextWeek}
        prevWeek={togglePrevWeek}
        month={month}
        showModal={showModal}
      />
      <Calendar weekDates={weekDates} events={events} deleteEvent={onDeleteEvent} />
      {isModalView && <Modal events={events} onSubmit={onSubmit} hideModal={hideModal} />}
    </>
  );
};

export default App;
