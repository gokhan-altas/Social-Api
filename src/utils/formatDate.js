export default function normalizeISODateD(isoDate) {
  const newDate = isoDate.split("T");
  const time = newDate[1].split(":");

  return time[0] + ":" + time[1] + " " + newDate[0];
}
