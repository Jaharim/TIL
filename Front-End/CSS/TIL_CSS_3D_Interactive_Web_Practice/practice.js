let maxScrollValue;
const stage = document.querySelector(".stage");
const container = document.querySelector(".container");
const mousePos = { x: 0, y: 0 };
 
function mousemoveHandler(e) {
  mousePos.x = -1 + (e.clientX / window.innerWidth * 2);
  mousePos.y = 1 - (e.clientY / window.innerHeight * 2);
  container.style.transform = `rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * 5}deg)`;
}

function scrollHandler() {
  const scrollPer = (this.pageYOffset / maxScrollValue);
  const zMove = scrollPer * 950 - 500;
  stage.style.transform = `translateZ(${zMove}vw)`;
}
 
function resizeHandler() {
  maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
}
 
window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', resizeHandler);
window.addEventListener('mousemove', mousemoveHandler);
resizeHandler();

