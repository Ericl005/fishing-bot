// Provides Data on Clans
// # ------=----------- #

const ClanShopData = require('./data/clanshop.json');
const ClanBoatData = require('./data/clanboat.json');
const ClanLocationData = require('./data/clanlocations.json');

module.exports.getPerkValue = function(name, level) {
    return ClanShopData.perks[name].levels[level-1].value;
}

module.exports.getPerkData = function(name) {
    return ClanShopData.perks[name];
}

module.exports.getAllClanShopData = function() {
    return ClanShopData;
}

// CLAN BOAT
module.exports.getHullCount = function() {
    return ClanBoatData.hull.length;
}
module.exports.getAllHullData = function() {
    return ClanBoatData.hull;
}
module.exports.getHullData = function(id) {
    return ClanBoatData.hull[id - 1];
}

module.exports.getEngineCount = function() {
    return ClanBoatData.engine.length;
}
module.exports.getAllEngineData = function() {
    return ClanBoatData.engine;
}
module.exports.getEngineData = function(id) {
    return ClanBoatData.engine[id - 1];
}

module.exports.getContainerCount = function() {
    return ClanBoatData.container.length;
}
module.exports.getAllContainerData = function() {
    return ClanBoatData.container;
}
module.exports.getContainerData = function(id) {
    return ClanBoatData.container[id - 1];
}

module.exports.getPropellerCount = function() {
    return ClanBoatData.propeller.length;
}
module.exports.getAllPropellerData = function() {
    return ClanBoatData.propeller;
}
module.exports.getPropellerData = function(id) {
    return ClanBoatData.propeller[id - 1];
}

// CLAN LOCATIONS
module.exports.getAllClanLocationData = function() {
    return ClanLocationData;
}
module.exports.getClanLocationData = function(id) {
    return ClanLocationData[id];
}