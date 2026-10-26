const progressBar = document.getElementsByClassName("progress-bar")
const bar1 = document.getElementById("bar1")

setInterval(() => {
    // Get current vertical scroll position in pixels
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get total scrollable height
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate scroll depth as a percentage (0 to 100)
    var scrollPercent = (scrollHeight > 0) ? (scrollTop / scrollHeight) * 100 : 0;

    bar1.style.width = (scrollTop / scrollHeight) * 100;
}, 100);
