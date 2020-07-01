let songList = [
  "Hope There's Someone",
  'A Sky Full Of Stars',
  'Addicted To You (Avicii By Avicii)',
  'Addicted To You',
  "Ain't A Thing",
  'Bad Reputation ft. Joe Janiak',
  'Blessed',
  'Broken Arrows',
  "Can't Catch Me",
  'City Lights',
  'Dear Boy',
  'Excuse Me Mr Sir',
  'Fades Away',
  'Feeling Good (Original)',
  'Feeling Good',
  'For a Better Day',
  'Freak',
  'Friend Of Mine',
  'Gonna Love Ya',
  'Heart Upon My Sleeve',
  'Heaven',
  'Hey Brother',
  'Hold The Line',
  'I Could Be The One',
  'Lay Me Down',
  'Levels',
  'Liar Liar',
  'Lonely Together',
  'Long Road To Hell',
  'Never Leave Me',
  'Peace Of Mind',
  'Pure Grinding',
  'Shame On Me',
  'Silhouettes',
  'So Much Better',
  'Somewhere In Stockholm',
  'SOS',
  'Sunset Jesus',
  'Talk To Myself',
  'Taste The Feeling',
  'Ten More Days',
  'The Days',
  'The Nights',
  'Touch Me',
  'Tough Love',
  'Trouble',
  'True Believer',
  'Waiting For Love',
  'Wake Me Up',
  'What Would I Change It To',
  'Without You',
  'You Be Love',
  'You Make Me (Avicii by Avicii)',
  'You Make Me',
];
let current = 0;
let songName = document.querySelector('h5');
let play_btn = document.querySelector('#play');
let prev_btn = document.querySelector('#pre');
let next_btn = document.querySelector('#next');
let range = document.querySelector('#range');
let play_img = document.querySelector('#play_img');
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
window.onload = playSong;

function playSong() {
  song.src = 'songs/' + songList[current] + '.mp3';
  songName.textContent = songList[current];

  next_btn.addEventListener('click', function () {
    if (current + 1 >= songList.length) return;
    current++;
    song.src = 'songs/' + songList[current] + '.mp3';
    songName.textContent = songList[current];
    if (isPlaying) {
      play_btn.click();
      play_btn.click();
    }
  });

  prev_btn.addEventListener('click', function () {
    if (current == 0) return;
    current--;
    song.src = 'songs/' + songList[current] + '.mp3';
    songName.textContent = songList[current];
    if (isPlaying) {
      play_btn.click();
      play_btn.click();
    }
  });

  play_btn.addEventListener('click', function () {
    if (!isPlaying) {
      song.play();
      isPlaying = true;
      total_time = song.duration;
      range.max = total_time;
      play_img.src = 'images/pause.png';
    } else {
      song.pause();
      isPlaying = false;
      play_img.src = 'images/play.png';
    }
    song.addEventListener('ended', function () {
      song.currentTime = 0;
      song.pause();
      isPlaying = false;
      range.value = 0;
      play_img.src = 'images/play.png';
    });
    song.addEventListener('timeupdate', function () {
      range.value = song.currentTime;
    });
    range.addEventListener('change', function () {
      song.currentTime = range.value;
    });
  });
}
