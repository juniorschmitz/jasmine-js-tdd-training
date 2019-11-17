function Appointment(pacient, procedures, insurance, followup, date) {
  
  var clazz = {
    price : function() {
      if(followup) return 0;
      var finalPrice = 0;
      procedures.forEach(function(procedure) {
        if("x-ray" == procedure) finalPrice += 55;
        else if("plaster-cast" == procedure) finalPrice += 32;
        else finalPrice += 25;
      });
      if(!insurance) finalPrice *= 2;

      return finalPrice;
    },

  getName : function() { return pacient; },
  getProcedures : function() { return procedures; },
  isFollowUp : function() { return followup; },
  haveInsurance : function() { return insurance; },
  getDate : function() { return date; }

  }

  return clazz;
}