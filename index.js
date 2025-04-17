let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let homeScoreCont = document.getElementById("home-container")

let guestScoreEl = document.getElementById("guest-score")
let guestScoreCont = document.getElementById("guest-container")

let playing = true

function updateLead() {
    if (homeScore > guestScore) {
        homeScoreCont.classList.add("lead")
        guestScoreCont.classList.remove("lead")
    }
    else if (homeScore < guestScore) {
        homeScoreCont.classList.remove("lead")
        guestScoreCont.classList.add("lead")
    }
    else {
        homeScoreCont.classList.remove("lead")
        guestScoreCont.classList.remove("lead")
    } 
}

function add1Home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    updateLead()
}
function add2Home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    updateLead()
}
function add3Home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    updateLead()
}


function add1Guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    updateLead()
}
function add2Guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    updateLead()
}
function add3Guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    updateLead()
}

