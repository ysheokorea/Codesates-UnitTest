const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();
const { helloWolrd } = require("../testApp.js");

describe("My First Test", () => {
  beforeEach(() => {
    console.log("🚀️ test start ...");
  });

  it("1) Chai Assert Test", () => {
    const result = helloWolrd();
    assert.equal(result, "hello world");
    assert.lengthOf(result, 11);
    assert.typeOf(result, 'string')
  });

  it("2) Chai Expect Test", () => {
    const result = helloWolrd();
    expect(result).to.be.a('string');
    expect(result).to.equal('hello world');
    expect(result).to.have.lengthOf(11);
  });

  it("3) Chai Should Test", () => {
    const result = helloWolrd();
    result.should.be.a('string');
    result.should.equal('hello world');
    result.should.have.lengthOf(11);
  });

  afterEach(() => {
    console.log("🔨️ test terminated ... ");
  });
});
