document.addEventListener('DOMContentLoaded', (event) => {
  const videos = document.querySelectorAll('video');

  videos.forEach(video => {
    const loopStart = 120; // 2:40 in seconds
    const loopEnd = 130; // 2:54 in seconds
    var isLooping = true;
    var isClicked = false;

    // Play the video when the page loads
    video.currentTime = loopStart;
    video.play();

    // Function to handle time update for looping
    function handleTimeUpdate() {
      if (isLooping && video.currentTime >= loopEnd) {
        video.pause();
        video.currentTime = loopStart;
        video.play();
      }
    }

    // Pause and loop the video between 2:40 and 2:54
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Play the full video and show controls when clicked
    video.addEventListener('click', () => {
      if(!isClicked){
        isLooping = false;
        video.loop = false;
        video.controls = true; // Show controls
        video.removeEventListener('timeupdate', handleTimeUpdate); // Remove the loop logic
        video.currentTime = 0;
        video.play();
        isClicked = true;
      }
    });
  });
});
