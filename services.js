angular.module("customServices", [])
  .service("logService", function() {
    var messageCount = 0;
    return {
      log: function(msg) {
        console.log("Debug: " + (messageCount++) + " " + msg);
      }
    };
  });