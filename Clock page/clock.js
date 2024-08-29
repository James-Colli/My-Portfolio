let nav = document.getElementById("nav")
let chevronUp = document.getElementById("chevron-up")
let clock = document.getElementById("clock")
let hamburger = document.getElementById("hamburger-pic")
let navContainer = document.getElementById("nav-container")
let overlay = document.getElementById("overlay")

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
// chevronUp.addEventListener("click", function () {
//     window.scrollTo({top:0, behavior: "smooth"})
// })

// code for clock to direct to the top the page
clock.addEventListener("click", function (event) {
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


// THE CLOCK FUNCTIONING

let minuteHand = document.getElementById("minute-hand")
let hourHand = document.getElementById("hour-hand")
let secHand = document.getElementById("sec-hand")

let digitalDiv = document.getElementById("digital-gen-div")
let hourDiv = document.getElementById("hour-div")
let minuteDiv = document.getElementById("minute-div")
let secondDiv = document.getElementById("second-div")
let sectionDiv = document.getElementById("section-div")

let dateDay = document.getElementById("date-day")


function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6
    const secondAngle = seconds * 6

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secHand.style.transform = `rotate(${secondAngle}deg)`

}
setInterval(updateClock, 1000);


// digital clock 

function digitalClock() {
    const mainTime = new Date();
    let newHour = mainTime.getHours()%12;
    const newMinute = mainTime.getMinutes();
    const newSecond = mainTime.getSeconds();
    let ampm = mainTime.getHours() < 12 ? 'am' : 'pm';
    newHour = newHour === 0 ? 12 : newHour;

    writtenMonth = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const month = mainTime.getMonth()
    const day = mainTime.getDate()
    const year = mainTime.getFullYear()
    let dateBack = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
    

    hourDiv.innerHTML = `${newHour}:`;
    minuteDiv.innerHTML = `${newMinute.toString().padStart(2, '0')}`;
    secondDiv.innerHTML = `:${newSecond.toString().padStart(2, '0')}`;
    sectionDiv.innerHTML = `${ampm}`

    console.log(mainTime.getHours());
    
    

    dateDay.innerHTML = `${writtenMonth[month]} ${day}${dateBack}, ${year}`
} setInterval(digitalClock, 1000)


