const progressBar = document.getElementsByClassName("progress-bar")
const bar1 = document.getElementById("bar1")
var percentage = 0;

window.addEventListener('scroll', () => {

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;
  const newPercentage = totalHeight > 0 
    ? (currentScroll / totalHeight) * 100 
    : 0;
  percentage = Math.max(newPercentage, percentage);

  bar1.style.width = percentage + '%';
});
