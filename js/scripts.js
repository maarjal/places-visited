var vacationList = [];
var numberOfVacations = 0;
var currentSelection = 0;
function Vacation(loc, landmark, season, note) {
  this.loc = loc;
  this.landmark = [];
  this.landmark.push(landmark);
  this.season = season;
  this.note = note;
};

Vacation.prototype.addLandmark = function(landmark) {
  this.landmark.push(landmark);
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var loc = $("input#new-location").val();
    var landmark = $("input#new-landmark").val();
    var season = $("select#new-season").val();
    var note = $("input#new-note").val();
    var newVacation = new Vacation(loc, landmark, season, note);
    vacationList.push(newVacation);
    var currentVacation = "vacation" + numberOfVacations
    console.log(currentVacation);
    $("#places").append("<li> <span id=" + currentVacation + " class='vacation'>" + newVacation.loc + "</span></li>");
    numberOfVacations ++;
    $(".vacation").last().click(function() {
      currentSelection = this.id.slice(-1);
       $("#show-places").show();
       $("#show-places h2").text(newVacation.loc);
       $("#show-landmark").text(newVacation.landmark);
       $("#show-season").text(newVacation.season);
       $("#show-note").text(newVacation.note);
    });
  });
  $("#landmark").submit(function(event) {
    event.preventDefault();
    console.log("made it here");
    var addedLandmark = $("input#add-landmark").val();
    vacationList[currentSelection].addLandmark(addedLandmark);
  });
});
