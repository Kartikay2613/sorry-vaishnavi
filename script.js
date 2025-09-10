const button = document.getElementById("forgiveBtn");
const video = document.getElementById("sorryVideo");

// Funny moving button
button.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 150));
  const y = Math.floor(Math.random() * (window.innerHeight - 80));
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

// Play video when button clicked
button.addEventListener("click", () => {
  button.style.display = "none";
  video.style.display = "block";
  video.play();
  window.location.href = "#video";
});
