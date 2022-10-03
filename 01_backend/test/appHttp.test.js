const assert = require("chai").assert;
const chai = require('chai')
const chaiHttp = require("chai-http");
const server = require("../index");
chai.use(chaiHttp);

describe("My First HTTP Test", () => {
  beforeEach(() => {
    console.log("🚀️ Test Start ...");
  });

  it("1) Chai Assert HTTP Get Test", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body, "hello world");
        assert.lengthOf(res.body, 11);
        assert.typeOf(res.body, "string");
        done();
      });
  });

  it("2) Chai Assert HTTP Post Test", (done) => {
    const data = {data : 'codestates'}

    chai
      .request(server)
      .post("/")
      .send(data)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.data, "codestates");
        assert.lengthOf(res.body.data, 10);
        assert.typeOf(res.body.data, "string");
        done();
      });
    })

  afterEach(() => {
    console.log("🔨️ Test Terminated ... ");
  });
});
