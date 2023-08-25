let questions;
$.getJSON("https://cocaine-potato.github.io/media/files/json/questions.json").done(function( data ) {
    questions = data;
});

let m = Math;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(questions[getRndInteger(0, questions.length-1)].points)