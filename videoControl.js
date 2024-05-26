document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('buttonwood');

  const loopStart = 120; // 2:40 in seconds
  const loopEnd = 130; // 2:54 in seconds
  let isLooping = true;

  // Play the video when the page loads
  video.currentTime = loopStart;
  video.play();

  // Pause and loop the video between 2:40 and 2:54
  video.addEventListener('timeupdate', () => {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  });

  // Play the full video and show controls when clicked
  video.addEventListener('click', () => {
      isLooping = false;
      video.loop = false;
      video.controls = true; // Show controls
      video.removeEventListener('timeupdate', handleTimeUpdate); // Remove the loop logic
      video.currentTime = 0;
      video.play();
  });

  // Function to handle time update for looping
  function handleTimeUpdate() {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  }

  // Add the event listener for timeupdate with the handler
  video.addEventListener('timeupdate', handleTimeUpdate);
});


document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('stravinsky');

  const loopStart = 120; // 2:40 in seconds
  const loopEnd = 130; // 2:54 in seconds
  let isLooping = true;

  // Play the video when the page loads
  video.currentTime = loopStart;
  video.play();

  // Pause and loop the video between 2:40 and 2:54
  video.addEventListener('timeupdate', () => {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  });

  // Play the full video and show controls when clicked
  video.addEventListener('click', () => {
      isLooping = false;
      video.loop = false;
      video.controls = true; // Show controls
      video.removeEventListener('timeupdate', handleTimeUpdate); // Remove the loop logic
      video.currentTime = 0;
      video.play();
  });

  // Function to handle time update for looping
  function handleTimeUpdate() {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  }

  // Add the event listener for timeupdate with the handler
  video.addEventListener('timeupdate', handleTimeUpdate);
});



document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('gordon');

  const loopStart = 120; // 2:40 in seconds
  const loopEnd = 130; // 2:54 in seconds
  let isLooping = true;

  // Play the video when the page loads
  video.currentTime = loopStart;
  video.play();

  // Pause and loop the video between 2:40 and 2:54
  video.addEventListener('timeupdate', () => {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  });

  // Play the full video and show controls when clicked
  video.addEventListener('click', () => {
      isLooping = false;
      video.loop = false;
      video.controls = true; // Show controls
      video.removeEventListener('timeupdate', handleTimeUpdate); // Remove the loop logic
      video.currentTime = 0;
      video.play();
  });

  // Function to handle time update for looping
  function handleTimeUpdate() {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  }

  // Add the event listener for timeupdate with the handler
  video.addEventListener('timeupdate', handleTimeUpdate);
});


document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('bach');

  const loopStart = 120; // 2:40 in seconds
  const loopEnd = 130; // 2:54 in seconds
  let isLooping = true;

  // Play the video when the page loads
  video.currentTime = loopStart;
  video.play();

  // Pause and loop the video between 2:40 and 2:54
  video.addEventListener('timeupdate', () => {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  });

  // Play the full video and show controls when clicked
  video.addEventListener('click', () => {
      isLooping = false;
      video.loop = false;
      video.controls = true; // Show controls
      video.removeEventListener('timeupdate', handleTimeUpdate); // Remove the loop logic
      video.currentTime = 0;
      video.play();
  });

  // Function to handle time update for looping
  function handleTimeUpdate() {
    if (isLooping && video.currentTime >= loopEnd) {
      video.pause();
      video.currentTime = loopStart;
      video.play();
    }
  }

  // Add the event listener for timeupdate with the handler
  video.addEventListener('timeupdate', handleTimeUpdate);
});
