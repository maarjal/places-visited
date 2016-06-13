function Vacation(loc, landmark, season, note) {
  this.loc = loc;
  this.landmark = [];
  this.landmark.push(landmark);
  this.season = season;
  this.note = note;
  alert(this.loc);
};

Vacation.prototype.addLandmark = function(landmark) {
  this.landmark.push(landmark);
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var loc = $("input#new-location").val();
    var landmark = $("input#new-landmark").val();
    var season = $("input#new-season").val();
    var note = $("input#new-note").val();

    var newVacation = new Vacation(loc, landmark, season, note);

    $("#places").append("<li>" + newVacation.loc + "</li>" +
                        "<li>" + newVacation.landmark + "</li>" +
                        "<li>" + newVacation.season + "</li>" +
                        "<li>" + newVacation.note + "</li>");
    $("#places").show();

  });
});
