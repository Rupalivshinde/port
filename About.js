
var main = document.querySelector(".container")
var crsr = document.querySelector(".crsr")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})

var menu = document.querySelector(".menu")
var cross = document.querySelector(".ri-close-large-line")

var tl = gsap.timeline()

tl.to("#nav-menu", {
    left: 0,
    duration: 0.5,
    // delay: 1,
})
tl.pause()
menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()
})

// gsap.to(".container #nav-menu", {
//     scale: 1,
//     opacity: 0,
// })


