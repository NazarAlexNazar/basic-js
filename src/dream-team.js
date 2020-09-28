const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(myFriends) {
  if (Array.isArray(myFriends) === false) return false;

  let dreamTeam = '';
  let newName = '';
  let arrTeam = [];

  myFriends.forEach((friendName) => {
    if (typeof(friendName) === 'string') {
      newName  = friendName.trim();
      newName = newName.toUpperCase();
      arrTeam.push(newName[0]);
    } 
  })

  arrTeam.sort();
  dreamTeam = arrTeam.join('');

  return dreamTeam;
};
