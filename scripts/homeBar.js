const progressBar = document.getElementsByClassName("progress-bar")
const bar1 = document.getElementById("bar1")
var percentage = 0;

window.addEventListener('scroll', () => {

  percentage = localStorage.getItem("Practical Tools");

  bar1.style.width = percentage + '%';
});