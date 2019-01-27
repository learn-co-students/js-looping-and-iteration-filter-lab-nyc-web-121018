function findMatching(drivers, name) {
return drivers.filter(function (driverName){
  return driverName.toLowerCase() === name.toLowerCase()
})
}

function fuzzyMatch(list, short_string) {
  let lengthOfString = short_string.length

  return list.filter(function (nameBeg){
    return nameBeg.slice(0,lengthOfString) === short_string
  })
}

function matchName(drivers, string){
  return drivers.filter(function (driverName){
    return driverName.name === string
  })
}
