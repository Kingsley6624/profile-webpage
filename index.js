const timeDisplay = document.getElementById("current-time");

const now = new Date();

const currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

const isoTime = now.toISOString();

timeDisplay.textContent = currentTime;
timeDisplay.setAttribute("datetime", isoTime);

