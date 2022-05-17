const startBtn = document.querySelector(".startBtn");
const title = document.querySelector(".title");
const container = document.querySelector(".container");
console.log(startBtn);
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
});


