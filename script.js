const playBtn = document.getElementById('play');
const albumArt = document.getElementById('album-art');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar'); 

let isPlaying = false;
let currentProgress = 35; // mock starting value
let interval;

function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        albumArt.classList.add('playing');
        interval = setInterval(() => {
            currentProgress += 0.2;
            if (currentProgress > 100) currentProgress = 0;
            progress.style.width = currentProgress + '%';
        }, 100);
    } else {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        albumArt.classList.remove('playing');
        clearInterval(interval);
    }
}

playBtn.addEventListener('click', togglePlay);
