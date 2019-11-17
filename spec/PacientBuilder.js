function PacientBuilder() {

  var name = "Test";
  var age = 28;
  var weight = 80;
  var height = 1.70;

  var clazz = {

    withAge : function(value) {
      age = value;
      return this;
    },

    construct : function() {
      return Pacient(name, age, weight, height);
    }

  };

  return clazz;
}