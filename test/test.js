var expect = require('expect.js');
var http = require('http');

describe('test http request', function () {
  it('should return 200 status code', function (done) {
    http.get("http://127.0.0.1:3000/test/abc", function(res) {
      expect(res.statusCode).to.equal(200);
      var data = "";
      res.on("data", function(d){
        data += d;
      });
      res.on("end", function() {

        var jsonData = JSON.parse(data);
        expect(jsonData.message).to.equal("Hello world");
        done();
      });
    });
  });
});
