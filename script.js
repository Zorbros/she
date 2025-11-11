/*functions that make appear typeshi*/
function playlistx() {
  const section = document.getElementById("playlist-section");
  section.style.display = section.style.display === "flex" ? "none" : "flex";
}

function playlistx() {
  const section = document.getElementById("playlist-section");
  const record = document.querySelector(".record-btn");

  if (section.style.display === "flex") {
    section.style.display = "none";
  } else {
    section.style.display = "flex";
  }
  record.classList.toggle("moved");
}


function updatebutton1() {
  const section = document.getElementById("letter1");
  const button = document.getElementById("mailButton1");
  const icon = button.querySelector(".material-symbols-rounded");

  const isVisible = section.style.display === "flex";

  if (isVisible) {
    section.style.display = "none";
    button.classList.remove("moved");
    icon.textContent = "mail";
    button.style.opacity = "1";
  } else {

    section.style.display = "flex";
    button.classList.add("moved");
    icon.textContent = "drafts";
    button.style.opacity = "0.5";
  }
}

function openPlayer(songName) {
  document.getElementById("update1").style.display = "none";
  document.getElementById("controlsbutton").style.display = "flex";
  document.getElementById("videobox").style.display = "block";
  document.getElementById("current-song").style.display = "block";

  const audioPlayer = document.getElementById("audio-player");
  const videoPlayer = document.getElementById("song-video");
  const currentSong = document.getElementById("current-song");

  audioPlayer.src = `audio/${songName}.mp3`;
  videoPlayer.src = `video/${songName}.mp4`;
  currentSong.textContent = songName;

}



document.getElementById('playlist-title').addEventListener('click', () => {
  alert('Playlist button clicked!');

});



const audioPlayer = document.getElementById('audio-player');
const videoPlayer = document.getElementById('song-video');
const currentSongTitle = document.getElementById('current-song');
const songListItems = document.querySelectorAll('#song-list li');
const playBtn = document.getElementById('play-btn');

let playlist = [];
let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;


songListItems.forEach((li, index) => {
  playlist.push({
    audio: li.dataset.audio,
    video: li.dataset.video,
    title: li.textContent
  });

  li.addEventListener('click', () => {
  currentIndex = index;
  loadSong(currentIndex);
  });
});


function loadSong(index) {
  const song = playlist[index];
  audioPlayer.src = song.audio;
  videoPlayer.src = song.video;
  currentSongTitle.textContent = song.title;
}


function playSong() {
  audioPlayer.play();
  isPlaying = true;
  playBtn.textContent = '⏸️';
  videoPlayer.play();
}
function pauseSong() {
  audioPlayer.pause();
  isPlaying = false;
  playBtn.textContent = '▶️';
  videoPlayer.pause();
}
function togglePlay() {
  if(isPlaying) pauseSong();
  else playSong();
}


function downloadSong() {
  const audio = document.getElementById("audio-player");
  const currentSrc = audio.src;
  
  if (!currentSrc) {
    alert("No song is loaded to open.");
    return;
  }

  // Open the audio file in a new tab
  window.open(currentSrc, "_blank");
}
function downloadVideo() {
  const video = document.getElementById("song-video");
  const currentSrc = video.src;

  if (!currentSrc) {
    alert("No video is loaded to open.");
    return;
  }

  // Open the video file in a new tab
  window.open(currentSrc, "_blank");
}



function togglePlay() {
  const audio = document.getElementById("audio-player");
  const playIcon = document.getElementById("play-icon");

  if (audio.paused) {
    audio.play();
    playIcon.textContent = "pause"; // switch icon
  } else {
    audio.pause();
    playIcon.textContent = "play_arrow"; // switch back
  }
}


// Next / Previous
function nextSong() {
  if(isShuffle) {
    currentIndex = Math.floor(Math.random() * playlist.length);
  } else {
    currentIndex++;
    if(currentIndex >= playlist.length) {
      currentIndex = isRepeat ? 0 : playlist.length-1;
    }
  }
  loadSong(currentIndex);
  playSong();
}
function prevSong() {
  currentIndex--;
  if(currentIndex < 0) currentIndex = isRepeat ? playlist.length-1 : 0;
  loadSong(currentIndex);
  playSong();
}

// Shuffle / Repeat
function toggleShuffle() { isShuffle = !isShuffle; }
function toggleRepeat() { isRepeat = !isRepeat; }

// Automatically play next song when current ends
audioPlayer.addEventListener('ended', nextSong);

// Toggle playlist visibility via record player
function togglePlayer() {
  const section = document.getElementById('playlist-section');
  section.style.display = section.style.display === 'flex' ? 'none' : 'flex';
}