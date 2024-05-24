document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('buttonwood');
  
    const loopStart = 120; // 2:40 in seconds
    const loopEnd = 130; // 2:54 in seconds
  
    // Play the video when the page loads
    video.currentTime = loopStart;
    video.play();
  
    // Pause and loop the video between 2:40 and 2:54
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= loopEnd) {
        video.pause();
        video.currentTime = loopStart;
        video.play();
      }
    });
  
  // Play the full video and show controls when clicked
    video.addEventListener('click', () => {
        video.loop = false;
        video.controls = true; // Show controls
        video.currentTime = 0;
        video.play();
    });
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('stravinsky');
  
    const loopStart = 120; // 2:40 in seconds
    const loopEnd = 130; // 2:54 in seconds
  
    // Play the video when the page loads
    video.currentTime = loopStart;
    video.play();
  
    // Pause and loop the video between 2:40 and 2:54
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= loopEnd) {
        video.pause();
        video.currentTime = loopStart;
        video.play();
      }
    });
  
  // Play the full video and show controls when clicked
    video.addEventListener('click', () => {
        video.loop = false;
        video.controls = true; // Show controls
        video.currentTime = 0;
        video.play();
    });
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('gordon');
  
    const loopStart = 120; // 2:40 in seconds
    const loopEnd = 130; // 2:54 in seconds
  
    // Play the video when the page loads
    video.currentTime = loopStart;
    video.play();
  
    // Pause and loop the video between 2:40 and 2:54
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= loopEnd) {
        video.pause();
        video.currentTime = loopStart;
        video.play();
      }
    });
  
  // Play the full video and show controls when clicked
    video.addEventListener('click', () => {
        video.loop = false;
        video.controls = true; // Show controls
        video.currentTime = 0;
        video.play();
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('bach');
  
    const loopStart = 120; // 2:40 in seconds
    const loopEnd = 130; // 2:54 in seconds
  
    // Play the video when the page loads
    video.currentTime = loopStart;
    video.play();
  
    // Pause and loop the video between 2:40 and 2:54
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= loopEnd) {
        video.pause();
        video.currentTime = loopStart;
        video.play();
      }
    });
  
  // Play the full video and show controls when clicked
    video.addEventListener('click', () => {
        video.loop = false;
        video.controls = true; // Show controls
        video.currentTime = 0;
        video.play();
    });
  });
  
  