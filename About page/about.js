let nav = document.getElementById("nav")
let chevronUp = document.getElementById("chevron-up")
let about = document.getElementById("about")
let hamburger = document.getElementById("hamburger-pic")

// code for bg to change color when scrolled
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
       nav.classList.add("scrolled") 
    } else {
        nav.classList.remove("scrolled")
    }
})

// code for chevron up to show
window.addEventListener("scroll", function () {
    if(this.window.scrollY > this.window.innerHeight) {
        chevronUp.style.opacity= "1"
    } else {
        chevronUp.style.opacity = "0"
    }
})

// code for chevron up to direct to the top the page
chevronUp.addEventListener("click", function () {
    window.scrollTo({top:0, behavior: "smooth"})
})

// code for about to direct to the top the page
about.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({top:0, behavior: "smooth"})
})

// code for hamburger icon to show nav container
hamburger.addEventListener("click", () => {
    overlay.style.top = "0%"
});

hamburger.addEventListener("dblclick", () => {
    overlay.style.top = "-100%"
});