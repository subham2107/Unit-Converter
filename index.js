const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to Unit Converter. Which conversion would you like to use?\n1. Meter to Kilometer\n2. Foot to Centimeter\n'));

console.log(`You selected ${userResponse}`);

 function meterToKilometer(meter)
{
   return meter/1000;
}

function footToCentimeter(foot)
{
   return foot*30.48;
}

switch(userResponse)
{
   case 1:
     const meter = parseInt(readLineSync.question('Please enter your input in meters\n'));
     console.log(meterToKilometer(meter));
     break;
 
   case 2:
     const foot = parseInt(readLineSync.question('Please enter your input in foot\n'));
     console.log(footToCentimeter(foot));
     break;

   default:
     console.log('Invalid Option');
     break;
}