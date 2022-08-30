//Set a variable and function to display the current month and day at the top of the page. 

var currentDayEl = $('#currentDay');


function displayDay() {
    var rightDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(rightDay);
  }

  setInterval(displayDay, 1000);


//   $(".saveBtn").on("click", function(event) { console.log(event.currentTarget.id.split('-')[1]);

//   var textId = event.currentTarget.id.split('-')[1];
//   console.log($(`#${textId}`));

// // Get value from html element

// var textVal = $(`#${textId}`)[0].value;
//   console.log(textVal);
//   localStorage.setItem(textId, textVal);

// });



$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time, value);

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});


$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



//set variables for each hour of the work day. 
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;

// created a variable for the actual hour of the day to compare my other variables by based on "past," "present," and "future."
var currentHour = moment().format('H');


//create an "if" "else" statement for each hour to assign a color based one "past," "present," and "future."
if (currentHour < hour9) {
    $('#9-text').addClass("future");
} else if (currentHour == hour9) {
    $('#9-text').addClass("present");
} else if (currentHour > hour9) {
    $('#9-text').addClass("past");
}

if (currentHour < hour10) {
    $('#10-text').addClass("future");
} else if (currentHour == hour10) {
    $('#10-text').addClass("present");
} else if (currentHour > hour10) {
    $('#10-text').addClass("past");
}

if (currentHour < hour11) {
    $('#11-text').addClass("future");
} else if (currentHour == hour11) {
    $('#11-text').addClass("present");
} else if (currentHour > hour11) {
    $('#11-text').addClass("past");
}

if (currentHour < hour11) {
    $('#12-text').addClass("future");
} else if (currentHour == hour11) {
    $('#12-text').addClass("present");
} else if (currentHour > hour11) {
    $('#12-text').addClass("past");
}

if (currentHour < hour13) {
    $('#13-text').addClass("future");
} else if (currentHour == hour13) {
    $('#13-text').addClass("present");
} else if (currentHour > hour13) {
    $('#13-text').addClass("past");
}

if (currentHour < hour14) {
    $('#14-text').addClass("future");
} else if (currentHour == hour14) {
    $('#14-text').addClass("present");
} else if (currentHour > hour14) {
    $('#14-text').addClass("past");
}

if (currentHour < hour15) {
    $('#15-text').addClass("future");
} else if (currentHour == hour15) {
    $('#15-text').addClass("present");
} else if (currentHour > hour15) {
    $('#15-text').addClass("past");
}

if (currentHour < hour16) {
    $('#16-text').addClass("future");
} else if (currentHour == hour16) {
    $('#16-text').addClass("present");
} else if (currentHour > hour16) {
    $('#16-text').addClass("past");
}

if (currentHour < hour17) {
    $('#17-text').addClass("future");
} else if (currentHour == hour17) {
    $('#17-text').addClass("present");
} else if (currentHour > hour17) {
    $('#17-text').addClass("past");
}






