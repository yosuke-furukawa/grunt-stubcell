var Stubcell = require("stubcell");
var defaults = {
  entry : "entry.yaml",
  port  : 3000,
  keepalive : false,
};
module.exports = function(grunt) {
  "use strict";

  grunt.registerMultiTask('stubcell', 'Launch stub server', function(arg){
    var stubcell = new Stubcell();
    var done = this.async();

    var entry = this.data.entry || defaults.entry;
    var port = this.data.port || defaults.port;
    var keepalive = this.data.keepalive || defaults.keepalive;

    stubcell.loadEntry(entry);
    var server = stubcell.server();
    if (!keepalive) {
      done();
    }
    server.listen(port);
  });
};
