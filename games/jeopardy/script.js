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
ql = questions.length
console.log(questions[getRndInteger(0, ql-1)].points)