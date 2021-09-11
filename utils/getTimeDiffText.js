import moment from "moment";

export default (timeText) => {
  const date = moment(timeText);
  const now = moment(moment.now());

  const years = now.diff(date, "years");
  if (years > 0) return `${years} years ago`;

  const months = now.diff(date, "months");
  if (months > 0) return `${months} months ago`;

  const days = now.diff(date, "days");
  if (days > 0) return `${days} days ago`;

  const hours = now.diff(date, "hours");
  return `${hours} hours ago`;
};
