$.ajaxSetup({
    async: false
});

let questions;
$.getJSON("https://cocaine-potato.github.io/media/files/json/questions.json").done(function( data ) {
    questions = data;
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
