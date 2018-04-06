// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenseIssued = driverData.licenseIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar;
/*
driverLicense: 'B1',
licenceIssued: 2001,
numberOfAccident: 0,
bonus: 0.8,
*/
// Your code here:
canRentACar = (driverLicense === "B" && (numberOfAccident>0 && bonus>0.6));
