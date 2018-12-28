// Write your code in this file!

function scuberGreetingForFeet(value) {
    if(value <= 400) {
        return "This one is on me!"
    }
    else if(value > 2000 && value < 2500){
        return 'I will gladly take your thirty bucks.'
    }
    else if(value > 2500) {
        return 'No can do.'
    }

}

function ternaryCheckCity(value){
    if(value == 'NYC'){
        return 'Ok, sounds good.'
    }
    else {
        return 'No go.'
    }
}

function switchOnCharmFromTip(value){
    if(value == 'generous') {
        return "Thank you so much."
    }
    else if (value == 'not as generous') {
        return "Thank you."
    }
    else {
        return 'Bye.'
    }
}