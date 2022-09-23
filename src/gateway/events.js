const baseUrl = 'https://62e3f5a5c6b56b45117f936b.mockapi.io/api/v1/calendar';

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internet Server Error. Can't display events");
    }
  });

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error("Internet Server Error. Can't display events");
    }
    return response.json();
  });

export const deleteEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
