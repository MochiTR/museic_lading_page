const cardList = document.querySelector('.cardList');
console.log(cardList);
// gsap.defaults({
//     overwrite: true
//   });
if(cardList){
const clone = cardList.cloneNode(true);
cardList.after(clone);

gsap.to('.cardList', { duration: 10, xPercent: -100, ease: "none", repeat: -1 }).timeScale(1);

//album carousel
var albums = document.getElementsByClassName('album')
var transforms = [
  { x: 0,
    z: 0,
    scale: 1,
    opacity: 1,
    title:"Got Me",
    singer:"Nito-Onna, Poylow",
    player:`<audio controls controlsList="nodownload"><source src="/audio/Poylow - Got Me (feat. Nito-Onna) [NCS Release].mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`
  },
  { x: '-100%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.5,
    title:"Sleeping Till Noon",
    singer:"Andrew A, FROZT",
    player:`<audio controls controlsList="nodownload"><source src="/audio/FROZT, Andrew A - Sleeping Till Noon (Feat.Moav) [NCS Release].mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`
  },
  { x: '-200%',
    z: '-75px',
    scale: 0.7,
    opacity: 0.3,
    title:"Street Lights",
    singer:"JJD, Azertion, Time To Talk",
    player:`<audio controls controlsList="nodownload"><source src="/audio/Time To Talk, Azertion & JJD - Street Lights (Ft. Axollo) [NCS Release].mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`
  },
   { x: '200%',
    z: '-75px',
    scale: 0.7,
    opacity: 0.3,
    title:"Throne (Lost Identities Remix)",
    singer:"Lost Identites, Rival",
    player:`<audio controls controlsList="nodownload"><source src="/audio/Rival - Throne (ft. Neoni) (Lost Identities Remix) [NCS Release].mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`
  },
  {
    x: '100%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.5,
    title:"Take Me",
    singer:"Used, Andromedik",
    player:`<audio controls controlsList="nodownload"><source src="/audio/Andromedik & Used - Take Me [NCS Release].mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>`
  }
];

var nextTransform = function(x) {
  if (x >= albums.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

const songName = document.querySelector('#songTitle');
const singerName = document.querySelector('#singerName');
const musicPlayer = document.querySelector('#player');

function next() {
  for (i = 0; i < albums.length; i++) {
    albums[i].style.transform = 
      'translateX(' + transforms[nextTransform(i)].x + ')' + 
      'translateZ(' + transforms[nextTransform(i)].z + ')' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    albums[i].style.opacity = transforms[nextTransform(i)].opacity;
    songName.textContent = transforms[nextTransform(i)].title;
    singerName.textContent = transforms[nextTransform(i)].singer;
    musicPlayer.innerHTML = transforms[nextTransform(i)].player;
  }
  transforms.push(transforms.shift());
}
  
document.getElementById('carousel').onclick = function() {
  next();  
};
}

function addActive() {
  let btn = document.querySelectorAll('.paymentBtn');
  const btnArray = [...btn]
  btnArray.forEach(function(item) {
    item.addEventListener('click',function(e) {
      btnArray.forEach(function(item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
    })
  })
}
addActive();