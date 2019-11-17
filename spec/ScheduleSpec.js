describe("Schedule", function() {

  var agenda;

  beforeEach(function() {
      agenda = new Schedule();
      pacient = new PacientBuilder().construct();
  });

  it("should appoint for 20 days from now", function() {
      var appointment = new Appointment(pacient, [], false, false, new Date(2019,11,1));
      var newAppointment = agenda.scheduleAppointment(appointment, 2);

      expect(newAppointment.getDate().toString()).toEqual(new Date(2019,11,3).toString());
  });

  it("should jump weekends", function() {
    var appointment = new Appointment(pacient, [], false, false, new Date(2019,11,11));
    var newAppointment = agenda.scheduleAppointment(appointment, 10);

    expect(newAppointment.getDate().toString()).toEqual(new Date(2019,11,23).toString());
  });

});
