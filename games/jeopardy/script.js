let questions;
$.getJSON("https://cocaine-potato.github.io/media/files/json/questions.json").done(function( data ) {
    questions = data;
});
