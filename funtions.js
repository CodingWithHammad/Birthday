// Window Resize Reload (improved logic)
let $win = $(window);
let clientWidth = $win.width();
let clientHeight = $win.height();

$(window).resize(function () {
    let newWidth = $win.width();
    let newHeight = $win.height();
    if (newWidth !== clientWidth || newHeight !== clientHeight) {
        location.reload();
    }
    clientWidth = newWidth;
    clientHeight = newHeight;
});

// Typewriter Effect Plugin (HTML-aware as in your old comment)
(function ($) {
    $.fn.typewriter = function () {
        return this.each(function () {
            let $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html('');
            let timer = setInterval(function () {
                let char = str.substr(progress, 1);
                if (char === "<") {
                    // skip tags
                    progress = str.indexOf(">", progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
                if (progress >= str.length) clearInterval(timer);
            }, 75);
        });
    };
})(jQuery);

Usage: $(".typewriter").typewriter();

// If you only want text (no HTML), use .text(), as in your working code:

// (function ($) {
//     $.fn.typewriter = function () {
//         return this.each(function () {
//             let $ele = $(this),
//                 str = $ele.text(),
//                 progress = 0;
//             $ele.text('');
//             let timer = setInterval(function () {
//                 progress++;
//                 $ele.text(str.substring(0, progress) + (progress % 2 ? "_" : ""));
//                 if (progress >= str.length) clearInterval(timer);
//             }, 100);
//         });
//     };
// })(jQuery);

// $(".typewriter").typewriter();

// Time elapsed timer
// function timeElapse(date) {
//     let current = new Date();
//     let seconds = Math.floor((current.getTime() - new Date(date).getTime()) / 1000);


//     let days = Math.floor(seconds / (3600 * 24));
//     // let days = 572;
//     seconds = seconds % (3600 * 24);

//     let hours = Math.floor(seconds / 3600);
//     // let hours = 13;
//     if (hours < 10) hours = "0" + hours;
//     seconds = seconds % 3600;

//     let minutes = Math.floor(seconds / 60);
//     // let minutes = 52;
//     if (minutes < 10) minutes = "0" + minutes;
//     seconds = seconds % 60;

//     if (seconds < 10) seconds = "" + seconds;
//     // seconds=seconds * 1;
//     let result =
//         "It's been <span class='digit'>" + days +
//         "</span> days <span class='digit'>" + hours +
//         "</span> hrs <span class='digit'>" + minutes +
//         "</span> mins <span class='digit'>" + seconds + " sec </span>";

//     $("#clock").html(result);
//     $("#message-box").html("Since the day I met you, my life became magical AngryBird 💖");
//     console.log("Timer fired at: ", new Date().toISOString());
// }

function timeElapse(date) {
    const current = new Date();
    const inputDate = new Date(date);
    if (isNaN(inputDate)) {
        $("#clock").html("Invalid date provided");
        return;
    }
    const seconds = Math.floor((current - inputDate) / 1000);

    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    const result = `It's been <span class='digit'>${days}</span> days <span class='digit'>${hours}</span> hrs <span class='digit'>${minutes}</span> mins <span class='digit'>${remainingSeconds} sec</span>`;

    $("#clock").html(result);
    $("#message-box").html("Since the day I met you, my life became magical AngryBird 💖");
    console.log("Timer fired at: ", new Date().toISOString());
}

// Start the timer — change date as per your story
setInterval(function () {
    timeElapse("2024-01-10T20:03:51+05:30");// Change to your love date
}, 1000);

// Optional: Call the typewriter on your target element
// $(".typewriter").typewriter();
