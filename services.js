angular.module("customServices", [])
  .factory("logService", function($log) {
    var messageCount = 0;
    return {
      log: function(msg) {
        $log.debug("(LOG + " + messageCount++ + ") " + msg);
      }
    };
  });