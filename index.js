const readLineSync = require('readline-sync');

const user_response = parseInt(readLineSync.question('Welcome to Unit Converter. Which conversion would you like to use?\n1. Meter to Kilometer\n2. Foot to Centimeter\n'));

console.log(`You selected ${user_response}`);
logic(user_response);

 function metertokilometer(meter)
{
  return meter/1000;
}

function foottocentimeter(foot)
{
  return foot*30.48;
}

function logic(user_response)
{
  if(user_response===1)
  {
    const meter =parseInt(readLineSync.question('Please enter your input in meters\n'));
    console.log(metertokilometer(meter));
  }
 
 else if(user_response===2)
  {
    const foot =parseInt(readLineSync.question('Please enter your input in foot\n'));
    console.log(foottocentimeter(foot));
  }

  else
  console.log('Invalid Option');
}