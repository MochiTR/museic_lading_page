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
    opacity: 1
  },
  { x: '-100%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.5
  },
  { x: '-200%',
    z: '-75px',
    scale: 0.7,
    opacity: 0.3
  },
   { x: '200%',
    z: '-75px',
    scale: 0.7,
    opacity: 0.3
  },
  {
    x: '100%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.5
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

function next() {
  for (i = 0; i < albums.length; i++) {
    albums[i].style.transform = 
      'translateX(' + transforms[nextTransform(i)].x + ')' + 
      'translateZ(' + transforms[nextTransform(i)].z + ')' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    albums[i].style.opacity = transforms[nextTransform(i)].opacity;
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
