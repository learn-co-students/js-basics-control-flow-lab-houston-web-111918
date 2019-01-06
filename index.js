// Write your code in this file!

function scuberGreetingForFeet(someValue){
    let statement;
    if (someValue <= 400 ){
        statement = "This one is on me!"
        return statement;
    }
    else if (someValue >  2500) {
        statement = "No can do.";
        return statement;
    }
    else if (someValue > 2000){
        statement = "I will gladly take your thirty bucks.";
        return statement;
    }
}

function ternaryCheckCity(city){
    return (city == 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(generosity){
    switch (generosity) {
        case 'generous':
            return 'Thank you so much.'
            break;
        case 'not as generous':
            return 'Thank you.';
            break;
        default:
            return 'Bye.';
            break;
    }
}