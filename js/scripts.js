function Vacation(loc, landmark, season) {
  this.loc = loc;
  this.landmark = [];
  this.landmark.push(landmark);
  this.season = season;
  alert(this.loc);
};

Vacation.prototype.addLandmark = function(landmark) {
  this.landmark.push(landmark);
};
