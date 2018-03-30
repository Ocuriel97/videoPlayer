let player = document.querySelector('.player');
let video = player.querySelector('.viewer');
let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progress__filled');

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

function skip () {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate () {
  video[this.name] = this.value;
}

function updateButton () {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function handleProgress () {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
