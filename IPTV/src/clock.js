import { formatTime } from './utils/timeFormatter';

export function setupClock(element) {
  const updateClock = () => {
    const now = new Date();
    element.innerHTML = formatTime(now);
  };

  // Update immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);
}