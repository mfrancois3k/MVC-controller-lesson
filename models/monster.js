// this file conects to t he debata an loops the through names
// (user request > app.js > Controllers > Models > Controllers > Views > user).
const monsterData = require("../data/monsterData");

const getMonsterNames = () => {
    return monsterData.monsters.map((monster) => monster.name);
};

const getMonsterInfo = (name) => {
    return monsterData
        .monsters
        .filter((monster) => {
          return monster.name === name;
        })[0];
}

module.exports = {
    getMonsterNames: getMonsterNames,
    getMonsterInfo: getMonsterInfo
};