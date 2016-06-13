var currentVacation = "";

function Vacation(loc, landmark, season, note) {
  this.loc = loc;
  this.landmark = [];
  this.landmark.push(landmark);
  this.season = season;
  this.note = note;
  // debugger;
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

    $("#places").append("<li> <span class='vacation'>" + newVacation.loc + "</span></li>");
    // debugger;
    $(".vacation").last().click(function() {
      currentVacation =
       $("#show-places").show();
       $("#show-places h2").text(newVacation.loc);
       $("#show-landmark").text(newVacation.landmark);
       $("#show-season").text(newVacation.season);
       $("#show-note").text(newVacation.note);
    });

  });
  $("form#landmark").submit(function(event) {
    event.preventDefault();
    var addedLandmark = $("input#add-landmark").val();
    addLandmark(addedLandmark);
  });
});
