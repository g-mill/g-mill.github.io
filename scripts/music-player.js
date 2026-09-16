import 'media-chrome';
for (const video of document.querySelectorAll('.music-player video')) {
  video.controls = false;
  video.addEventListener('play', () => {
    for (const other of document.querySelectorAll('.music-player video')) {
      if (other !== video) other.pause();
    }
  });
}
