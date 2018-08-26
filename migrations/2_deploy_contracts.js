var PolizaRetraso = artifacts.require("./PolizaRetraso.sol");

module.exports = function(deployer) {
  deployer.deploy(PolizaRetraso);
}
