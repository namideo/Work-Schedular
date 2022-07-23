//Set a variable and function to display the current month and day at the top of the page. 

var currentDayEl = $('#currentDay');


function displayDay() {
    var rightDay = moment().format('dddd, MMMM Do');
    currentDayEl.text(rightDay);
  }

  setInterval(displayDay, 1000);


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
    $('#9').addClass("future");
} else if (currentHour == hour9) {
    $('#9').addClass("present");
} else if (currentHour > hour9) {
    $('#9').addClass("past");
}

if (currentHour < hour10) {
    $('#10').addClass("future");
} else if (currentHour == hour10) {
    $('#10').addClass("present");
} else if (currentHour > hour10) {
    $('#10').addClass("past");
}

if (currentHour < hour11) {
    $('#11').addClass("future");
} else if (currentHour == hour11) {
    $('#11').addClass("present");
} else if (currentHour > hour11) {
    $('#11').addClass("past");
}

if (currentHour < hour11) {
    $('#12').addClass("future");
} else if (currentHour == hour11) {
    $('#12').addClass("present");
} else if (currentHour > hour11) {
    $('#12').addClass("past");
}

if (currentHour < hour13) {
    $('#13').addClass("future");
} else if (currentHour == hour13) {
    $('#13').addClass("present");
} else if (currentHour > hour13) {
    $('#13').addClass("past");
}

if (currentHour < hour14) {
    $('#14').addClass("future");
} else if (currentHour == hour14) {
    $('#14').addClass("present");
} else if (currentHour > hour14) {
    $('#14').addClass("past");
}

if (currentHour < hour15) {
    $('#15').addClass("future");
} else if (currentHour == hour15) {
    $('#15').addClass("present");
} else if (currentHour > hour15) {
    $('#15').addClass("past");
}

if (currentHour < hour16) {
    $('#16').addClass("future");
} else if (currentHour == hour16) {
    $('#16').addClass("present");
} else if (currentHour > hour16) {
    $('#16').addClass("past");
}

if (currentHour < hour17) {
    $('#17').addClass("future");
} else if (currentHour == hour17) {
    $('#17').addClass("present");
} else if (currentHour > hour17) {
    $('#17').addClass("past");
}



  
$(".saveBtn").on("click", function(event) { console.log(event.currentTarget.id.split('-')[1]);

    var textId = event.currentTarget.id.split('-')[1];
    // console.log($(`#${textId}`));

// Get value from html element

var textVal = $(`#${textId}`)[0].value;
    console.log(textVal);
  localStorage.setItem(textId, textVal);

  $('#9').innerHTML = localStorage.getItem(textId);
  console.log("content");

});