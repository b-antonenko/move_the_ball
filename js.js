'use strict';
const ball = document.querySelector('.ball');
const field = document.querySelector('.field');

field.onclick = function (event) {
    let top = event.clientY  - field.clientTop - ball.offsetHeight / 2;
    let left = event.clientX - field.clientLeft - ball.offsetWidth / 2;
    let maxLeft = field.clientWidth - ball.offsetWidth;
    let maxTop = field.clientHeight - ball.offsetHeight;

    if ( left > maxLeft) {
        left = maxLeft;
    }
    if ( left < 0) {
        left = 0;
    }
    if (top > maxTop) {
        top = maxTop;
    }
    if ( top < 0) {
        top = 0;
    }

    ball.style.left = `${left}px`
    ball.style.top = `${top}px`
}