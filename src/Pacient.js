function Pacient(name, age, weight, height) {
  
  var clazz = {
    imprime : function() {
      alert(name + " tem " + age + " anos.");
    },

    heartBeats : function() {
      return age * 365 * 24 * 60 * 80;
    },

    imc : function() {
      return weight / (height * height);
    }
  };

  return clazz;
}