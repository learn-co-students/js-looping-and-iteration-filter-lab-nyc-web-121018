// The filter method is one of the core iterator methods in JavaScript. It's a powerful tool for reducing a set of data into a set of data you want.
//





//
// This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
                    // array // string
function findMatching(drivers, name) {
    // var result = drivers.filter(function(item){ return string.indexOf(item) > -1});
    return drivers.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase();});
}

//
function fuzzyMatch(drivers, name){
  return drivers.filter(function (driverName) { return driverName[0].toLowerCase() === name[0].toLowerCase();});


}
// //
// this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, string){
  return drivers.filter(function (driver) {
  return driver.name.toLowerCase() === string.toLowerCase(); });

}
