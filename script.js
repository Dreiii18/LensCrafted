const playBtn = document.getElementById('play');
const music = new Audio();
music.src = 'audio/onceagain.mp3'
music.loop = true;
music.volume = 0.1;
let isPlaying = false;

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
    const photographers_navbar = document.querySelector('.photographers-navbar');
    const photographers_navbarLinks = document.querySelector('.photographers-navbar-links');
    let photographersLinksActive = false;

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        if (photographersLinksActive) {
            photographers_navbarLinks.classList.remove('active');
            navbarLinks.classList.remove('active');
            photographersLinksActive = false
        }
    });
    photographers_navbar.addEventListener('click', function() {
            photographers_navbarLinks.classList.toggle('active');
            navbarLinks.classList.remove('active');
            photographersLinksActive = true;
    });
});

window.addEventListener('scroll', function() {
    var mobileMenu = document.querySelector('.navbar-links');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

function togglePlay() {
    if(isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;

    playBtn.classList.replace('fa-play', 'fa-pause');

    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;

    playBtn.classList.replace('fa-pause', 'fa-play');

    playBtn.setAttribute('title', 'Play');
    music.pause();
}

playBtn.addEventListener('click', togglePlay);