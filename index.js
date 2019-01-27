// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (str) {return str.toLowerCase() === string.toLowerCase();});
}

function fuzzyMatch(array, string) {
  return array.filter(function (str) {return str[0].toLowerCase() === string[0].toLowerCase();});
}

function matchName(array, string) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
