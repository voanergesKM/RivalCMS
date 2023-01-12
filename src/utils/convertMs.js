export function msToTime(created, currentTime) {
  const time = currentTime - created;

  const days = Math.floor(time / 86400000);
  const weeks = Math.floor(time / 604800000);
  const month = Math.floor(time / 2629746000);
  const year = Math.floor(time / 31556952000);

  let data = '';

  if (month > 12) {
    data = `${year} year`;
  } else if (weeks > 4) {
    data = `${month} month`;
  } else if (days > 7) {
    data = `${weeks} weeks`;
  } else data = `${days || 0} days`;

  return `Updated ${data} ago`;
}
