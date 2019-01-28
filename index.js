// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, firstTwoLetters) {
  return drivers.filter(function (driverName) {
    return driverName.slice(0,2) === firstTwoLetters;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver['name'] === name;
  });
}
