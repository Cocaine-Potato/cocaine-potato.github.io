function checkKeyPress(event) {
    if (event.altKey && event.key === 'h') {
        window.location.href = "/Home/";
    }
}


document.addEventListener('keydown', checkKeyPress);
