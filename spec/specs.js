describe("wordReplacement", function() {
  it("allows a user to input a string", function() {
    expect("This is a house").to.eql("This is a house")
  });

  it("allows a user to enter a find word and a replace word", function() {
    expect("This is a house", "house", "bed").to.eql("This is a house", "house", "bed")
  });

  it("replaces the found word with a new word of user's choice", function() {
    expect(wordReplacement("This is a house", "house", "bed")).to.eql("This is a bed")
  });

  it("replaces the found word even if case doesn't match", function() {
    expect(wordReplacement("This is a HOUSE", "house", "bed")).to.eql("This is a bed")
  });
});
