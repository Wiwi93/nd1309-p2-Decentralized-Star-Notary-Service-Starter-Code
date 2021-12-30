const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary,"UdaWi","UDW").then(function(){
    console.log(StarNotary.address);
  })
};
