// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns another function to multiply fare
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Doubles fare
const fareDoubler = createFareMultiplier(2);

// 6. Triples fare
const fareTripler = createFareMultiplier(3);

// 7. Takes a function and drivers array and applies the function
function selectDifferentDrivers(drivers, whichDrivers) {
  return whichDrivers(drivers);
}

