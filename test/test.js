var expect = require('expect.js');
var http = require('http');
var fs = require('fs');

describe('test http request', function () {
  it('should return 200 status code', function (done) {
    http.get("http://127.0.0.1:3000/test/abc", function(res) {
      expect(200).to.equal(res.statusCode);
      var data = "";
      res.on("data", function(d){
        data += d;
      });
      res.on("end", function() {

        var jsonData = JSON.parse(data);
        expect("Hello world").to.equal(jsonData.message);
        done();
      });
    });
  });
  it('should return hello/world json', function (done) {
    http.get("http://127.0.0.1:3000/hello/world", function(res) {
      expect(200).to.equal(res.statusCode);
      var data = "";
      res.on("data", function(d){
        data += d;
      });
      res.on("end", function() {
        var jsonData = JSON.parse(data);
        expect(jsonData.hello).to.equal("world");
        fs.readFile("test/fixture/hello/world.json", function(err, data) {
          expect(JSON.parse(""+data).hello).to.equal("world");
        });
        done();
      });
    });
  });
});
