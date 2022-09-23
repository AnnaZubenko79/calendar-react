export const getWeekStartDate = date => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};
console.log(getWeekStartDate(new Date('17 September 2022')));

export const generateWeekRange = startDate => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};
console.log(generateWeekRange(new Date('17 September 2022')));

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(':');
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};
console.log(getDateTime(new Date('17 September 2022'), '13:15'));

export const formatMins = mins => (mins < 10 ? `0${mins}` : mins);

export const hours = Array(24)
  .fill()
  .map((_, index) => index);

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const eventTime = date =>
  `${new Date(date).getHours()}:${formatMins(new Date(date).getMinutes())}`;
export const getMonth = weekStartDate => {
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const startWeekDay = months[weekDates[0].getMonth()];
  const endWeekDay = months[weekDates[6].getMonth()];

  return startWeekDay === endWeekDay
    ? startWeekDay
    : `${startWeekDay.substring(0, 3)} - ${endWeekDay.substring(0, 3)}`;
};
