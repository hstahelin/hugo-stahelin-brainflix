export function formatDates(date) {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - date;

  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const monthInMilliseconds = 30 * dayInMilliseconds;
  const yearInMilliseconds = 12 * monthInMilliseconds;

  if (diffInMilliseconds < minuteInMilliseconds) {
    return "Less than a minute ago";
  } else if (diffInMilliseconds < hourInMilliseconds) {
    const minutes = Math.floor(diffInMilliseconds / minuteInMilliseconds);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffInMilliseconds < dayInMilliseconds) {
    const hours = Math.floor(diffInMilliseconds / hourInMilliseconds);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffInMilliseconds < monthInMilliseconds) {
    const days = Math.floor(diffInMilliseconds / dayInMilliseconds);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (diffInMilliseconds < yearInMilliseconds) {
    const months = Math.floor(diffInMilliseconds / monthInMilliseconds);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffInMilliseconds / yearInMilliseconds);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}
