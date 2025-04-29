let tl = gsap.timeline();

tl.to(".card", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

tl.from(".card h2", {
  y: -50,
  opacity: 0,
  duration: 0.6,
  ease: "bounce"
}, "-=0.5");

tl.from(".card p", {
  opacity: 0,
  y: 30,
  duration: 0.5
}, "-=0.3");

tl.to(".btn", {
  scale: 1,
  duration: 0.4,
  delay: 0.5,
  ease: "back.out(1.7)"
});
document.querySelector(".btn").addEventListener("click",()=>{
    window.location.href="calculator.html"
})

