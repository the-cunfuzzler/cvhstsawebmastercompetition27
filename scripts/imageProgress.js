const progressBar = document.getElementsByClassName("imgbadge")
const bar1 = document.getElementById("image1")
var part = 0;

const first = new CustomEvent('navigateNextPage', {
  detail: { targetPage: 'ethicalUsage.html' }
});
const second = new CustomEvent('navigationNextPage', {
    detail: { targetPage: 'fundamentalConcepts.html'}
});
const third = new CustomEvent('navigateNextPage', {
    detail: { targetPage: 'practiceTools.html'}
});

window.addEventListener('first', () => {
    

});