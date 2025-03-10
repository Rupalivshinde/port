gsap.from(".home p,.home h1,.home h5,.home h6,.logo,.btn1", {
    x: 170,
    duration: 0.9,
    delay: 0.1,
    opacity: 0,
    stagger: 1,
})
var main = document.querySelector(".container")
var crsr = document.querySelector(".crsr")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})
function myFunction() {
    var navbar = document.querySelector(".container")
    navbar.classlist.toggle('show');
}
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



