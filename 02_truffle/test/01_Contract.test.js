const assert = require("chai").assert;
const TestContract = artifacts.require("TestContract");

contract("🚀️ TestContract Unit Testing ... ", async (accounts) => {
  let contract;
  beforeEach(async () => {
    contract = await TestContract.deployed();
  });

  it("01 Account test", async () => {
    const bal = await web3.eth.getBalance(accounts[1])
    assert.equal(accounts.length === 10, true);
    assert.ok(bal > 0, "Initial balance of accoun is greater than 0")
  });

  it("02 Initial Name test", async () => {
    assert.equal(await contract.name(), "codestates");
  });

  it("03 Get Function test", async () => {
    await contract.set("BEB05", {from : accounts[0]});
    assert.equal(await contract.get(), "BEB05");
  });
});
