$(document).ready(function () {
  //Dynamic Date Displayed on Top of the page
  var displayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(displayDate);
});
