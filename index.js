// Code your solution in this file

function findMatching(drivers, name){
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
};

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(name){
    return name.slice(0, letters.length) === letters;
  });
};

function matchName(driverList, givenName){
  return driverList.filter(function(driver){
    return driver.name.toLowerCase() === givenName.toLowerCase();
  });
};
