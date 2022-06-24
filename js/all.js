const cardList = document.querySelector('.cardList');
console.log(cardList);
gsap.defaults({
    overwrite: true
  });

const clone = cardList.cloneNode(true);
cardList.after(clone);

const tl = gsap
  .to('.cardList', { duration: 10, xPercent: -100, ease: "none", repeat: -1 })
  .timeScale(1);
