describe("Appointment", function() {

  var pacient;

  beforeEach(function() {
    pacient = new PacientBuilder().withAge(20).construct();
  });

  describe("follou-up appointments", function() {
    it("should not charge follow up appointment with insurance", function() {
      var appointment = new Appointment(pacient, [], true, true);
      expect(appointment.price()).toEqual(0);
    });

    it("should not charge follow up appointment without insurance", function() {
      var appointment = new Appointment(pacient, [], false, false);
      expect(appointment.price()).toEqual(0);
    });
  });

  describe("procedure appointments", function() {
    it("should charge 55 for x-ray", function() {
      var appointment = new Appointment(pacient, ["x-ray"], true, false);
      expect(appointment.price()).toEqual(55);
    });

    it("should charge 32 for plaster-cast", function() {
      var appointment = new Appointment(pacient, ["plaster-cast"], true, false);
      expect(appointment.price()).toEqual(32);
    });

    it("should charge 25 for other procedures", function() {
      var appointment = new Appointment(pacient, ["something", "something2", "something3"], true, false);
      expect(appointment.price()).toEqual(75);
    });

    it("should double the price without health insurance", function() {
      var appointment = new Appointment(pacient, ["something", "something2", "something3"], false, false);
      expect(appointment.price()).toEqual(150);
    });
  });
 
});