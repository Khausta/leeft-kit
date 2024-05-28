
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

const videoOverlay = document.querySelector('.video');
const toPlay = document.getElementById('to-play');
const videoWrapper = document.querySelector('.video__video');
toPlay.addEventListener('click', () => {
  if (player) {
    videoOverlay.classList.add('_active');
    document.body.style.overflow = "hidden";
    videoWrapper.classList.add('_active');
    player.playVideo();
  } else {
    player = new YT.Player('player', {
          playerVars: { 
              'autoplay': 0, 
              'controls': 1,
              'playsinline': 1
          },
  
          height: '100%',
          width: '100%',
          videoId: 'G8lVXBN8ZFk',
          events: {
          'onReady': onPlayerReady,
          // 'onStateChange': onPlayerStateChange
          }
      });
  }
});


const closeVideo = document.querySelector('.video__close');

function onPlayerReady(e) {
  const video = e.target;
  e.target.playVideo();
  videoOverlay.classList.add('_active');
  document.body.style.overflow = "hidden";
  videoWrapper.classList.add('_active');

  videoOverlay.addEventListener('click', (e) => {
    if (e.target == videoOverlay || e.target == closeVideo) {
      video.pauseVideo();
      videoOverlay.classList.remove('_active');
      document.body.style.overflow = "visible";
      videoWrapper.classList.remove('_active');
    }
  })
}
  
