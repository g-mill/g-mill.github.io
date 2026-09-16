const videos = [...document.querySelectorAll('video[data-autoplay]')];

const visibleVideos = new Set();

function play(video) {
  video.play().catch(() => {
    // The poster and native controls remain available if autoplay is blocked.
  });
}

function updatePlayback(video, isVisible) {
  if (isVisible) {
    visibleVideos.add(video);
    if (!document.hidden) play(video);
  } else {
    visibleVideos.delete(video);
    video.pause();
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        updatePlayback(entry.target, entry.isIntersecting);
      }
    },
    { rootMargin: '300px 0px', threshold: 0.01 },
  );

  for (const video of videos) observer.observe(video);
} else {
  for (const video of videos) {
    video.preload = 'metadata';
    play(video);
  }
}

document.addEventListener('visibilitychange', () => {
  for (const video of visibleVideos) {
    if (document.hidden) video.pause();
    else play(video);
  }
});
