import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({ onSubmit, hideModal }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const { title, description, date, startTime, endTime } = eventData;

  const onChange = event => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={hideModal}>
            +
          </button>
          <form onSubmit={e => onSubmit(e, eventData)} className="event-form">
            <input
              onChange={onChange}
              value={title}
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                onChange={onChange}
                value={date}
                type="date"
                name="date"
                className="event-form__field"
              />

              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={onChange}
                value={startTime}
              />
              <span>-</span>
              <input
                onChange={onChange}
                value={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={onChange}
              value={description}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};
export default Modal;
