// Code your solution in this file!


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//return first two drivers function

const returnFirstTwoDrivers = (arrayToSlice) =>  arrayToSlice.slice(0,2) 

console.log(returnFirstTwoDrivers(drivers));

// should return an array of the last two drivers', function () {
//     expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
//   });
// });


//return last two drivers function

const returnLastTwoDrivers = (arrayToSlice) => arrayToSlice.slice(2,4)

console.log(returnLastTwoDrivers(drivers));



//selecting drivers function


const selectingDriversArray = [['Sally', 'Bob'], ['Freddy', 'Claudia']];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[1](drivers));



//createFareMultiplier function

const createFareMultiplier = (multiplier) => {
    const fareMultiplier = (numberToMultiply) => numberToMultiply*multiplier;

    return fareMultiplier;
}

//fareDoubler function

const fareDoubler = createFareMultiplier(2);

const fareDoubled = fareDoubler(100);

console.log(fareDoubled);

//fareTripler function

const fareTripler = createFareMultiplier(3)

const fareTripled = fareTripler(100)

console.log(fareTripled);

//selectDifferentDrivers function

const driverArray = [returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers = (driverArray, driverFunction) => {

    return driverFunction(driverArray);

}

console.log(selectDifferentDrivers(returnLastTwoDrivers, drivers));