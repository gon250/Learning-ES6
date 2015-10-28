// #ES5 example

var hello = function(message, name){
  return message + name;
}

// #ES6 example

var arrowHello = (message, name) => {
  return message + name;
}

// Looks like the same the only difference is the =>, but we can make it smaller.

// it's going to return automatically message + name,
// you don't have to write the return keyword
var arrowHello = (message, name) => message + name;

// In case you only have a paramiter, eg: message
var arrowHello = message => 'Hello';

/******************************************************************************/

//Let see a common scenario

// #ES5
var commonScenario = {
  name: 'Gonzalo',

  handleMessage: function (message, handler) {
    handler(message);
  },

  receive: function () {
    var that = this;

    this.handleMessage('hello, ', function (message) {
      that.name; // get the proper name
      console.log(message + that.name);
    });
  }
}

commonScenario.receive();

// ES6
var commonScenario = {
  name: 'Gonzalo',
  handleMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    this.handleMessage('hello, ', message => console.log(message + this.name))
  }
}

commonScenario.receive();
