(function () {
    function select_div(div_id) {
        return document.querySelector(div_id);
    }

    function get_time(now) {
        return {
            "hours": now.getHours(),
            "minutes": now.getMinutes(),
            "seconds": now.getSeconds()
        };
    }

    function get_degrees(hand_name, time) {
        if (hand_name === 'seconds') {
            return ((time.seconds / 60) * 360) + 90;
        }

        if (hand_name === 'minutes') {
            return ((time.minutes / 60) * 360) + ((time.seconds / 60) * 6) + 90;
        }

        if (hand_name === 'hours') {
            return ((time.hours / 12) * 360) + ((time.minutes / 60) * 30) + 90;
        }

        return false;
    }

    function rotate_clock_hand(hand_to_rotate, degrees) {
        hand_to_rotate.style.transform = "rotate(" + degrees + "deg)";
    }

    const hours_hand = select_div('.hours-hand');
    const minutes_hand = select_div('.minutes-hand');
    const seconds_hand = select_div('.seconds-hand');

    function show_time() {
        const time = get_time(new Date());
        const hours_degrees = get_degrees('hours', time);
        const minutes_degrees = get_degrees('minutes', time);
        const seconds_degrees = get_degrees('seconds', time);

        rotate_clock_hand(hours_hand, hours_degrees);
        rotate_clock_hand(minutes_hand, minutes_degrees);
        rotate_clock_hand(seconds_hand, seconds_degrees);
    }

    setInterval(show_time, 1000);
})();
