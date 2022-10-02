const links = document.querySelector('.links');
const bars = document.querySelector('.bars')
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

bars.addEventListener('click', function(){
    links.classList.toggle('links-active');

    bar1.classList.toggle('bar1-t');
    bar2.classList.toggle('bar2-t');
    bar3.classList.toggle('bar3-t');
})