const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateTag = document.getElementById('date');
const session = document.getElementById('session');
const months = [
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

setTimeout(() => {
  setInterval(() => {
    const date = new Date();
    let omg = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    let nSeconds = date.getSeconds();
    let nMinutes = date.getMinutes();
    let nHours = date.getHours();
    dateTag.textContent = omg;
    if (nHours > 11) {
      session.textContent = 'PM';
      nHours -= 12;
    } else {
      session.textContent = 'AM';
    }
    if (nHours < 10) {
      hours.textContent = '0' + nHours;
    } else {
      hours.textContent = nHours;
    }
    if (nMinutes < 10) {
      minutes.textContent = '0' + date.getMinutes();
    } else {
      minutes.textContent = date.getMinutes();
    }
    if (nSeconds < 10) {
      seconds.textContent = '0' + nSeconds;
    } else {
      seconds.textContent = nSeconds;
    }
  }, 100);
}, 1000);
