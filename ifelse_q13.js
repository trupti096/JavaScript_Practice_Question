var A=require('readline-sync').question('enter 1st number = ');
var B=require('readline-sync').question('enter 2nd number = ');
var C=require('readline-sync').question('enter 3rd number = ');
if (A==B==C){
    console.log("triangle is equilateral");
}
else if (A==B || B==C || C==B){
    console.log("triangle is isosceles");
}
else{
    console.log("triangle is scalene");
}