var A=require('readline-sync').question('enter 1st number = ');
var B=require('readline-sync').question('enter 2nd number = ');
var C=require('readline-sync').question('enter 3rd number = ');
if (A+B+C==180){
    console.log('triangle is valid');
}
else{
    console.log('triangle is not valid');
}