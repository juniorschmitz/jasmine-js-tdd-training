describe("HigherLower", function() {

  beforeEach(function() {
    var runForest = new HigherLower();
  });

  it("should understand numbers in sequential order", function() {
    runForest.find([10, 20, 30, 40, 50]);
    expect(runForest.getHigher()).toEqual(50);
    expect(runForest.getLower()).toEqual(10);
  });

  it("should understand numbers in non-sequential order", function() {
    runForest.find([50, 40, 30, 20, 10]);
    expect(runForest.getHigher()).toEqual(50);
    expect(runForest.getLower()).toEqual(10);
  });

  it("one element should be the higher and lower number", function() {
    runForest.find([100]);
    expect(runForest.getHigher()).toEqual(100);
    expect(runForest.getLower()).toEqual(100);
  });

});