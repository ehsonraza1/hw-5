$(document).ready(function () {
  // document.body.addEventListener("click", function () {
  //   console.log(event.target);
  // });

  //Dynamic Date Displayed on Top of the page
  var displayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(displayDate);

  var calendarEvent = [];
  var calendarEventStorage = JSON.parse(localStorage.getItem("<input>"));
  if (calendarEventStorage !== null) {
    calendarEvent = calendarEventStorage;
  }

  //Save Button
  $("button").on("click", "i", function (event) {
    event.preventDefault();

    var saveColor = $("i");
    saveColor.attr("style", "color:black");
    console.log(saveColor);

    //grab input from the text box and save in local storage

    var inputEvent = $("input").val();

    console.log(input + "input button");
    localStorage.setItem("calendarEvent", JSON.stringify(inputEvent));
  });

  // $("button").on("click", , function (
  //   event
  // ) {
  //   event.preventDefault();
  //   console.lof(event);
  //   var mouseHover = $(this).attr("bg-info")

  //   mouseHover.attr('style', 'background-color:gray');
  // });
});
