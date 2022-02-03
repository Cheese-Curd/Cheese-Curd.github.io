// funny stolen code
window.onload = function () {
    const tryToPlay = setInterval(() => {
        const audio = document.getElementById("welcome");
    
        audio.play()
            .then(() => {
                clearInterval(tryToPlay);
            })
            .catch(error => {
                console.info('User has not interacted with document yet.');
            });
    }, 5000);
}