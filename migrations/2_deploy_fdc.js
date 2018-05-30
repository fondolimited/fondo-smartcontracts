var FondoNetwork = artifacts.require("./FondoNetwork.sol");

module.exports = function(deployer) {
  deployer.deploy(FondoNetwork);
};
