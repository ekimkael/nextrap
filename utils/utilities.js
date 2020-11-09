export function convertUnixTimeToSeconds(time) {
  var date = new Date(time * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}
