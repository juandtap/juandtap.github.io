// window.onYouTubeIframeAPIReady = function() {
//     onYouTubeIframeAPIReady();
// };
// Carga la API de YouTube
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  // Crea un reproductor de YouTube con solo audio
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "wj9T0kMl2GM",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      playsinline: 1
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Oculta el video y reproduce solo el audio
  player.setPlaybackQuality("small");
  player.mute();
  player.playVideo();
}