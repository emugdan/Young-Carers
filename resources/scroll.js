var slots = document.querySelectorAll(".slot .filler");
const timestamps = document.querySelectorAll(".input-flex-container input[type=radio]");
console.log(timestamps)
var current = "#0630";
var old = timestamps[0];
old.checked = true;
window.onscroll = () => {

    slots.forEach((slot) => {
        const sectionTop = slot.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = slot.getAttribute("id");
        }
    });


    timestamps.forEach((ts) => {
        if (ts.attributes["data-description"].value == current) {
            old.checked = false;
            ts.checked = true;
            old = ts;
            history.pushState({}, document.title, location.href.split('#')[0] + "#" + current);
            //window.location.hash = (current);
        }
    });
};
