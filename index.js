const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const button = document.querySelector('.btn');
var playlist = [];
window.addEventListener('load', () => {


    const colors = ["#60d935", "#d36060", "#c060d3", "#d3d160", "#05afda", "#d93535"];
    const visual = document.querySelector(".visual");
    // MUSIC MAKING

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            console.log(sounds[index].duration);
            playlist.push(sounds[index].src);
            console.log(playlist);

        });
        var i = 0;
        button.addEventListener('click', function() {
            if (i < playlist.length) {
                playlist[i].play();
                i++;
            } else if (i > playlist.length) {
                i = 0;
                playlist[i].play();
            };



        });



    });



    // LETS MAKE BUBBLES

});