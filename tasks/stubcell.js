var Stubcell = require("stubcell");
var defaults = {
  entry : "entry.yaml",
  basepath : "",
  port  : 3000,
  keepalive : false,
  record : {},
};
module.exports = function(grunt) {
  "use strict";

  grunt.registerMultiTask('stubcell', 'Launch stub server', function(arg){
    var stubcell = new Stubcell();
    var done = this.async();

    var entry = this.data.entry || defaults.entry;
    var basepath = this.data.basepath || defaults.basepath;
    var port = this.data.port || defaults.port;
    var keepalive = this.data.keepalive || defaults.keepalive;
    var record = this.data.record || defaults.record;
    var debug = this.data.debug ? true : grunt.verbose;

    stubcell.loadEntry(entry, {
      debug: debug,
      record : record
    });
    var server = stubcell.server();
    if (!keepalive) {
      done();
    }
    server.listen(port);
  });
};
