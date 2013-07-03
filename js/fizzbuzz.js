var fizzbuzz = {

  conf : {
    min : 1,
    max : 100,
    fizz : 3,
    buzz : 5, 
    fizzOutput : "Fizz",
    buzzOutput : "Buzz",
    fizzBuzzOutput : "FizzBuzz"
  },

  start : function() {
    var f;
    var b;
    var fb;

    for(var i=this.conf.min; i<this.conf.max; i++) {

      f = this.checkFizz(i);
      b = this.checkBuzz(i);
      fb = this.checkFizzBuzz(i);

      if(fb !== undefined) {
        this.outputResult(fb);
      } else if(f !== undefined) {
        this.outputResult(f);
      } else if(b !== undefined) {
        this.outputResult(b);
      } else {
        this.outputResult(i);
      }
    }
  },

  checkFizz : function(n){
    if(n%this.conf.fizz === 0) {
      return this.conf.fizzOutput;
    }
  },

  checkBuzz : function(n) {
    if(n%this.conf.buzz === 0) {
      return this.conf.buzzOutput;
    }
  },

  checkFizzBuzz : function(n) {
    if(n%(this.conf.buzz*this.conf.fizz) === 0) {
      return this.conf.fizzBuzzOutput;
    }
  },

  outputResult : function(result) {
    console.log(result);
  }
}

fizzbuzz.start();