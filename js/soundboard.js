/*  SOUNDBOARD.JS
*   This code is available under the DO WHAT THE FUCK YOU WANT TO license.
*   The Social Lions - http://www.thesociallions.nl
*/ 
// Setting globals (yes, I really had to use them...)
var touchstarted = false;
var pause = '<span class="glyphicon glyphicon-pause"></span>';
var play = '<span class="glyphicon glyphicon-play"></span>';
var playButton = document.getElementById('play');

// Set up play button
playButton.onclick = function(){playPause();};
// Set up player events
var player = document.getElementById('player');
player.onended = function() {
    playButton.innerHTML = play;
    console.log('Playback ended');
};
player.onpause = function(){
    playButton.innerHTML = play;
    console.log('Playback paused');
};
player.onplay = function(){
    playButton.innerHTML = pause;
    touchstarted = true;
    console.log('Playback started');
};

// Set up mobile smoothing (Start <audio> on touchstart)
var touchstarted = false;
$(document).ready(function() {
    addEventListener('touchstart', function (e) {
        if (touchstarted == false) {
            playSound(0);
            touchstarted = true;
        }
    });
});

// Start ASCI Alarm
playSound(0);

function playSound(item){
    // Find the <audio> tag and track title
    var player = document.getElementById('player');
    var track = document.getElementById('track');
    // Set the sound to be played
    if (item == 0) {
        player.src = 'audio/luchtalarm.mp3';
        player.loop = true;
        track.innerHTML = 'ASCI Alarm';
    } else if (item == 1) {
        player.src = 'audio/asciwekker.mp3';
        player.loop = false;
        track.innerHTML = 'ASCI Wekker';
    } else if (item == 2) {
        player.src = 'audio/endoor.mp3';
        player.loop = false;
        track.innerHTML = 'En doorrr';
    } else if (item == 3) {
        player.src = 'audio/gelul.mp3';
        player.loop = false;
        track.innerHTML = 'Gelul';
    } else if (item == 4) {
        player.src = 'audio/informatiekunde.mp3';
        player.loop = false;
        track.innerHTML = 'Informatiekunde!';
    } else if (item == 5) {
        player.src = 'audio/jahoor.mp3';
        player.loop = false;
        track.innerHTML = 'Jahoorrr';
    } else if (item == 6) {
        player.src = 'audio/krekel.mp3';
        player.loop = true;
        track.innerHTML = 'Krekelgeluiden';
    } else if (item == 7) {
        player.src = 'audio/ikzalkijken.mp3';
        player.loop = false;
        track.innerHTML = 'Ik zal kijken wat ik voor je kan doen!';
    } else if (item == 8) {
        player.src = 'audio/geintjenatuurlijk.mp3';
        player.loop = false;
        track.innerHTML = 'Geintje natuurlijk!';
    } else if (item == 9) {
        player.src = 'audio/eten.mp3';
        player.loop = false;
        track.innerHTML = 'Eten!';
    } else if (item == 10) {
        player.src = 'audio/evenwatlater.mp3';
        player.loop = false;
        track.innerHTML = "Een A-E'tje!";
    } else if (item == 11) {
        player.src = 'audio/lachband.mp3';
        player.loop = false;
        track.innerHTML = "Lachband";
    }
    // Play the sound
    player.play();
}

function playPause(){
    var player = document.getElementById('player');
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}