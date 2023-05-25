function humanReadable(seconds) {
  let HH = pad(Math.floor(seconds / 3600), 2);
  seconds = seconds - HH * 3600;
  let MM = pad(Math.floor(seconds / 60), 2);
  seconds = seconds - MM * 60;
  let SS = pad(seconds, 2);

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  return `${HH}:${MM}:${SS}`;
}
