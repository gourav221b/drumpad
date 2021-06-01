const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
window.addEventListener('load', () => {
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
       });
    });
});
