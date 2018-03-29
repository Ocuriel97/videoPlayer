let player = document.querySelector('.player');
let video = player.querySelector('.viewer');
let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progres__filled');

let toggle = player.querySelector('.toggle');
let skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');

function togglePlay () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton () {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
