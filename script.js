document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('music');
    const playButton = document.getElementById('playButton');
    const playIcon = playButton.querySelector('.play-icon');
    const pauseIcon = playButton.querySelector('.pause-icon');
    const progressBar = document.querySelector('.progress');

    // Handle play/pause
    playButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            music.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    // Update progress bar
    music.addEventListener('timeupdate', function() {
        const progress = (music.currentTime / music.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    // Reset when song ends
    music.addEventListener('ended', function() {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        progressBar.style.width = '0%';
    });
});