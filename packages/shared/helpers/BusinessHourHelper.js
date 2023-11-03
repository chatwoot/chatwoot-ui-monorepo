import parse from 'date-fns/parse';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import timeZoneData from '../data/timezone.json';

export const defaultTimeSlot = [
  {
    day: 0,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 1,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 2,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 3,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 4,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 5,
    to: '',
    from: '',
    valid: false,
  },
  {
    day: 6,
    to: '',
    from: '',
    valid: false,
  },
];

export const generateTimeSlots = (step = 15) => {
  /*
    Generates a list of time strings from 12:00 AM to next 24 hours. Each new string
     will be generated by adding `step` minutes to the previous one.
    The list is generated by starting with a random day and adding step minutes till end of the same day.
  */
  const date = new Date(1970, 1, 1);
  const slots = [];
  while (date.getDate() === 1) {
    slots.push(
      date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    );
    date.setMinutes(date.getMinutes() + step);
  }
  return slots;
};

export const getTime = (hour, minute) => {
  const merdian = hour > 11 ? 'PM' : 'AM';
  const modHour = hour > 12 ? hour % 12 : hour || 12;
  const parsedHour = modHour < 10 ? `0${modHour}` : modHour;
  const parsedMinute = minute < 10 ? `0${minute}` : minute;
  return `${parsedHour}:${parsedMinute} ${merdian}`;
};

export const timeSlotParse = timeSlots => {
  return timeSlots.map(slot => {
    const {
      day_of_week: day,
      open_hour: openHour,
      open_minutes: openMinutes,
      close_hour: closeHour,
      close_minutes: closeMinutes,
      closed_all_day: closedAllDay,
      open_all_day: openAllDay,
    } = slot;
    const from = closedAllDay ? '' : getTime(openHour, openMinutes);
    const to = closedAllDay ? '' : getTime(closeHour, closeMinutes);

    return {
      day,
      to,
      from,
      valid: !closedAllDay,
      openAllDay,
    };
  });
};

export const timeSlotTransform = timeSlots => {
  return timeSlots.map(slot => {
    const closed = slot.openAllDay ? false : !(slot.to && slot.from);
    const openAllDay = slot.openAllDay;
    let fromDate = '';
    let toDate = '';
    let openHour = '';
    let openMinutes = '';
    let closeHour = '';
    let closeMinutes = '';

    if (!closed) {
      fromDate = parse(slot.from, 'hh:mm a', new Date());
      toDate = parse(slot.to, 'hh:mm a', new Date());
      openHour = getHours(fromDate);
      openMinutes = getMinutes(fromDate);
      closeHour = getHours(toDate);
      closeMinutes = getMinutes(toDate);
    }

    return {
      day_of_week: slot.day,
      closed_all_day: closed,
      open_hour: openHour,
      open_minutes: openMinutes,
      close_hour: closeHour,
      close_minutes: closeMinutes,
      open_all_day: openAllDay,
    };
  });
};

export const timeZoneOptions = () => {
  return Object.keys(timeZoneData).map(key => ({
    label: key,
    value: timeZoneData[key],
  }));
};
