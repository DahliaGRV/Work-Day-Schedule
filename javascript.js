var saveBtn1 = document.querySelector("#saveBtn1");
var saveBtn2 = document.querySelector("#saveBtn2");
var saveBtn3 = document.querySelector("#saveBtn3");
var saveBtn4 = document.querySelector("#saveBtn4");
var saveBtn5 = document.querySelector("#saveBtn5");
var saveBtn6 = document.querySelector("#saveBtn6");
var saveBtn7 = document.querySelector("#saveBtn7");
var saveBtn8 = document.querySelector("#saveBtn8");
var saveBtn9 = document.querySelector("#saveBtn9");

var commentSection1 = document.getElementById("9");
var commentSection2 = document.getElementById("10");
var commentSection3 = document.getElementById("11");
var commentSection4 = document.getElementById("12");
var commentSection5 = document.getElementById("13");
var commentSection6 = document.getElementById("14");
var commentSection7 = document.getElementById("15");
var commentSection8 = document.getElementById("16");
var commentSection9 = document.getElementById("17");

var currentDay = document.querySelector("#currentDay");

var currentDay = "";
function setDay(){
    dateTime = setInterval(function () {
        currentDay = moment().format("MMM Do, YYYY [at] HH:mm:ss");
        $("#currentDay").text(currentDay);
    },1000)
};


setDay();

function checkTime() {
    console.log("checkTime");
    setInterval(function () {
        var commentSection = document.querySelectorAll(".form-control");
        for (let i = 0; i < commentSection.length; i++) {
            console.log(commentSection[i].id);
            if (moment().hour() == commentSection[i].id) {
                commentSection[i].classList.add("present");
            } else if (moment().hour() > commentSection[i].id) {
                commentSection[i].classList.add("past");
            } else {
                commentSection[i].classList.add("future");
            };
        }
    }, 1000)
};
checkTime();

saveBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent1 = (commentSection1.value);
    localStorage.setItem("9AM", scheduledEvent1);
    localStorage.getItem("9AM");
    console.log(localStorage);
    console.log(scheduledEvent1);
});

saveBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent2 = (commentSection2.value);
    localStorage.setItem("10AM", scheduledEvent2);
    localStorage.getItem("10AM");
    console.log(localStorage);
    console.log(scheduledEvent2);
});
saveBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent3 = (commentSection3.value);
    localStorage.setItem("11AM", scheduledEvent3);
    localStorage.getItem("11AM");
    console.log(localStorage);
    console.log(scheduledEvent3);
});
saveBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent4 = (commentSection4.value);
    localStorage.setItem("12PM", scheduledEvent4);
    localStorage.getItem("12PM");
    console.log(localStorage);
    console.log(scheduledEvent4);
});
saveBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent5 = (commentSection5.value);
    localStorage.setItem("1PM", scheduledEvent5);
    localStorage.getItem("1PM");
    console.log(localStorage);
    console.log(scheduledEvent5);
});
saveBtn6.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent6 = (commentSection6.value);
    localStorage.setItem("2PM", scheduledEvent6);
    localStorage.getItem("2PM");
    console.log(localStorage);
    console.log(scheduledEvent6);
});
saveBtn7.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent7 = (commentSection7.value);
    localStorage.setItem("3PM", scheduledEvent7);
    localStorage.getItem("3PM");
    console.log(localStorage);
    console.log(scheduledEvent7);
});
saveBtn8.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent8 = (commentSection8.value);
    localStorage.setItem("4PM", scheduledEvent8);
    localStorage.getItem("4PM");
    console.log(localStorage);
    console.log(scheduledEvent8);
});
saveBtn9.addEventListener("click", function (event) {
    event.preventDefault();
    var scheduledEvent9 = (commentSection9.value);
    localStorage.setItem("5PM", scheduledEvent);
    localStorage.getItem("5PM");
    console.log(localStorage);
    console.log(scheduledEvent9);
});

var schedule1 = localStorage.getItem("9AM");
var schedule2 = localStorage.getItem("10AM");
var schedule3 = localStorage.getItem("11AM");
var schedule4 = localStorage.getItem("12PM");
var schedule5 = localStorage.getItem("1PM");
var schedule6 = localStorage.getItem("2PM"); 
var schedule7 = localStorage.getItem("3PM");
var schedule8 = localStorage.getItem("4PM");
var schedule9 = localStorage.getItem("5PM");

commentSection1.textContent = schedule1;
commentSection2.textContent = schedule2;
commentSection3.textContent = schedule3;
commentSection4.textContent = schedule4;
commentSection5.textContent = schedule5;
commentSection6.textContent = schedule6;
commentSection7.textContent = schedule7;
commentSection8.textContent = schedule8;
commentSection9.textContent = schedule9;
