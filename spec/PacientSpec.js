describe("Pacient", function() {

  it("should calculate the imc", function() {
    var pacient = new Pacient("Test", 28, 72, 1.82);

    var imc = pacient.imc();
    expect(imc).toEqual(72 / (1.82 * 1.82));
  });

  it("should calculate the heart beats", function() {
    var pacient = new Pacient("Test", 28, 72, 1.82);

    var heartBeats = pacient.heartBeats();
    expect(heartBeats).toEqual(28 * 365 * 24 * 60 * 80);
  });

});