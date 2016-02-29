var fs = require('fs');
var jsdom = require('jsdom');
var path = require('path');

describe("MadLib", function() {
  var $, replaceNouns, replaceVerbs, window;

  beforeAll(function(done) {
    var html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'));
    var scriptJs = path.resolve(__dirname, '..', 'js', 'script.js');

    window = jsdom.jsdom(html, {
      scripts: [scriptJs]
    }).defaultView;

    jsdom.jQueryify(window, 'http://code.jquery.com/jquery-2.1.1.js', function() {
      $ = window.$;
      replaceNouns = window.replaceNouns;
      replaceVerbs = window.replaceVerbs;

      done();
    });
  });

  it("should replace verbs", function() {
    var verbs = ['test', 'drive'];
    var get = spyOn($, "get").and.callFake(function(url, success) {
      success(verbs.join('\n'));
      return {fail: function(){}};
    });

    replaceVerbs();

    expectedVerb = $(".verb").first().text();
    expect(verbs.indexOf(expectedVerb)).toBeGreaterThan(-1)
  });

  it("should replace nouns", function() {
    var nouns = ['bob', 'joe'];

    spyOn($, "get").and.callFake(function(url, success) {
      success(nouns.join('\n'));
      return {fail: function(){}};
    });

    replaceNouns();
    expectedNoun = $(".noun").first().text();
    expect(nouns.indexOf(expectedNoun)).toBeGreaterThan(-1)
  });

});
