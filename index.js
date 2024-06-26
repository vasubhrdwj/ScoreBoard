let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

// let homeBtn1 = document.getElementById("hbtn-1");
let homeScore = 0
let guestScore = 0


function incrementHome1() {
    homeScore += 1
    homeEl.textContent = homeScore 

}
function incrementHome2() {
    homeScore += 2
    homeEl.textContent = homeScore 

}
function incrementHome3() {
    homeScore += 3
    homeEl.textContent = homeScore 

}

function incrementGuest1() {
    guestScore += 1
    guestEl.textContent = guestScore 

}
function incrementGuest2() {
    guestScore += 2
    guestEl.textContent = guestScore 

}
function incrementGuest3() {
    guestScore += 3
    guestEl.textContent = guestScore 

}

function resetScores(){
    homeScore=0
    guestScore=0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore 

}