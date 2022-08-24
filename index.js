let homeScore =document.getElementById("homesrc")
let guestScore= document.getElementById("guestsrc")

let home=0
let guest=0

function home1(){
    home=home+1
    homeScore.textContent=home
}
function home2(){
    home=home+2
    homeScore.textContent=home
}
function home3(){
    home=home+3
    homeScore.textContent=home
}
function guest1(){
    guest+=1
    guestScore.textContent=guest
}
function guest2(){
    guest+=2
    guestScore.textContent=guest
}
function guest3(){
    guest+=3
    guestScore.textContent=guest
}
function clear1(){
    homeScore.textContent=0
    home=0
    guestScore.textContent=0
    guest=0
    
}
