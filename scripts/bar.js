const bar1 = document.getElementById("bar1");

// Use for competition 
// let percentage = parseFloat(localStorage.getItem(document.title)) || 0; 

// Use for debuging purposes
let percentage = 0;

if (bar1) {
  bar1.style.width = percentage + '%';
}

window.addEventListener('scroll', () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;
  const newPercentage = totalHeight > 0 
    ? (currentScroll / totalHeight) * 100 
    : 0;

  percentage = Math.max(newPercentage, percentage);
  localStorage.setItem(document.title, percentage);

  if (bar1) {
    bar1.style.width = percentage + '%';
  }
});
