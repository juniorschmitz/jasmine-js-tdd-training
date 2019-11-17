function Schedule() {

  var clazz = {

    scheduleAppointment : function(appointment, days) {
        var oneDay = 1000 * 60 * 60 * 24;
        var addDays = oneDay * days;

        var newDate = new Date(appointment.getDate().getTime() + addDays);
        while(newDate.getDay()==0 || newDate.getDay()==6) newDate = new Date(newDate.getTime() + oneDay);
        var newAppointment = new Appointment(appointment.getName(), appointment.getProcedures(), 
        appointment.haveInsurance(), appointment.isFollowUp(), newDate);
        return newAppointment;
    }
};

return clazz;

}