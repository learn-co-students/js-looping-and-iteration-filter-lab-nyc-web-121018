// Code your solution in this file
function findMatching (driverList, name) {
  return driverList.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (driverList, partialName) {
  let lengthOfName = partialName.length;
  return driverList.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (driverList, name) {
  return driverList.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
