var Stubcell = require("stubcell");
var defaults = {
  entry : "entry.yaml",
  basepath : "",
  port  : 3000,
  keepalive : false,
  record : {},
  looseCompare : false,
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
    var looseCompare = this.data.looseCompare ? true : defaults.looseCompare;

    stubcell.loadEntry(entry, {
      debug: debug,
      record : record,
      basepath : basepath,
      looseCompare: looseCompare,
    });
    var server = stubcell.server();
    if (!keepalive) {
      done();
    }
    server.listen(port);
  });
};
