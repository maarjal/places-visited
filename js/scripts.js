function Vacation(loc, landmark) {
  this.loc = loc;
  this.landmark = [];
  this.landmark.push(landmark);
  alert(this.loc)
};

Vacation.prototype.addLandmark = function(landmark) {
  this.landmark.push(landmark);
};
