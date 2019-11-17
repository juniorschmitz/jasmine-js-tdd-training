function HigherLower() {

  var lower;
  var higher;

  var clazz = {
    find : function(numbers) {

      lower = Number.MAX_VALUE;
      higher = Number.MIN_VALUE;

      numbers.forEach(function(number){
        if (number < lower) lower = number;
        if(number > higher) higher = number;
      });
    },

    getLower : function() { return lower; },
    getHigher : function() { return higher; }
  };

  return clazz;

}

var runForest = new HigherLower();
runForest.find([10, 20, 25, 30, 50]);
