var socket = io();
var wrapper = document.querySelector(".clock__number-wrapper");

socket.on('userCounter', (count) =>{
    flipNumber(count);
});

function flipNumber (count) {
    wrapper.classList.add("clock__number-wrapper--open");
    setTimeout(function () {
        increment(".js-increment-before", count);
        wrapper.classList.remove("clock__number-wrapper--open");
        increment(".js-increment-after");
    }, 1000 / 2);
}

function increment (selector, count) {
    Array.from(document.querySelectorAll(selector)).forEach(function (el) {
        el.innerHTML = count;
    });
}