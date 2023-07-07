 const hamburger =  document.querySelector('.hamburger');
 const navbar =  document.querySelector('.header__menu');

 hamburger.addEventListener('click', function(){
    this.classList.toggle('open');
    navbar.classList.toggle('open');
})

function showSub(e) {
    e.preventDefault();
    var openSub = e.currentTarget.parentNode.querySelector('.sub__menu');
    openSub.classList.add('open');
}
var backs = document.querySelectorAll('.back-js')
for (var back of backs) {
  back.addEventListener('click', function() {
    this.parentNode.parentNode.classList.remove('open');
  });
}

var video = document.querySelector(".video");
var playBtn = document.querySelector(".play-button");
function Play() {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
}
video.addEventListener("click", Play);
playBtn.addEventListener("click", Play);