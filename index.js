// Code your solution in this file

function findMatching(drivers, string) {
  const match = drivers.filter(function (driver) {return driver.toUpperCase() === string.toUpperCase() })
  return match
}

function fuzzyMatch(drivers, string) {
  const match = drivers.filter(function (driver) {return driver.slice(0,2) === string})
  return match;
}

function matchName(drivers, string) {
  const match = drivers.filter(function (driver) {return driver.name === string;})
  return match
}
