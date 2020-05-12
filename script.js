$(document).ready(function () {
  // document.body.addEventListener("click", function () {
  //   console.log(event.target);
  // });

  //Dynamic Date Displayed on Top of the page
  var displayDate = moment().format("Hdddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(displayDate);

  var calendarEvent = [];
  var calendarEventStorage = JSON.parse(
    localStorage.getItem("calendarEventStorage")
  );
  if (calendarEventStorage !== null) {
    calendarEvent = calendarEventStorage;
  }

  //Save Button
  $("button").on("click", function () {
    event.preventDefault();
    //grab input from the text box and save in local storage

    var inputEvent = $("input").val();
    //console.log(input + "input button");
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEventStorage));
  });
});
