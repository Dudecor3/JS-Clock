function selectDiv(div_id) {
    var element = document.querySelector(div_id);
    console.log(element);
    return element;
}

function getDegrees(hand_name) {
    if (hand_name === 'seconds') {
        return ((seconds / 60) * 360) + 90;
    } else if (hand_name === 'minutes') {
        return ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    } else if (hand_name === 'hours') {
        return ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    } else {
        return false;
    }
}

function transformClockHands(clock_hand_name) {
    if (clock_hand_name === hoursHand) {
        hoursHand.style.transform = "rotate(" + hoursDegrees + "deg)";
    } else if (clock_hand_name === minutesHand) {
        minutesHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    } else if (clock_hand_name === secondsHand) {
        secondsHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    } else {
        return false;
    }
}


var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var hoursHand = selectDiv('.hours-hand');
var minutesHand = selectDiv('.minutes-hand');
var secondsHand = selectDiv('.seconds-hand');

var hoursDegrees = getDegrees('hours');
var minutesDegrees = getDegrees('minutes');
var secondsDegrees = getDegrees('seconds');

transformClockHands(hoursHand);
transformClockHands(minutesHand);
transformClockHands(secondsHand);





