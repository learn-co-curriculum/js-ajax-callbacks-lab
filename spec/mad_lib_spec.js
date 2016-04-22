describe("MadLib", function() {
  beforeEach(function() {
    setFixtures('<p> Today I went to the <span class="noun"></span>.  While I was there, I decided to <span class="verb"></span>.  As I <span class="verb"></span> the <span class="noun"></span>, I decided it was a perfect time to <span class="verb"></span>.  </p> <div> <input id="random_noun" type="button" value="Pick Nouns"/> <input id="random_verb" type="button" value="Pick Verbs"/> </div>');
  });

  it("should replace verbs", function() {
    var verbs = ['test', 'drive'];
    var get = spyOn($, "get").and.callFake(function(url, success) {
      success(verbs.join('\n'));
      return {fail: function(){}};
    });

    replaceVerbs();

    var expectedVerbs = $(".verb");

    expect(verbs.indexOf($(expectedVerbs[0]).text())).not.toEqual(-1);
    expect(verbs.indexOf($(expectedVerbs[1]).text())).not.toEqual(-1);
  });

  it("should replace nouns", function() {
    var nouns = ['bob', 'joe'];

    spyOn($, "get").and.callFake(function(url, success) {
      success(nouns.join('\n'));
      return {fail: function(){}};
    });

    replaceNouns();

    var expectedNouns = $(".noun");

    expect(nouns.indexOf($(expectedNouns[0]).text())).not.toEqual(-1);
    expect(nouns.indexOf($(expectedNouns[1]).text())).not.toEqual(-1);
  });
});
