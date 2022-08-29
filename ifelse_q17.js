var age1=require('readline-sync').question('enter a age = ');
var age2=require('readline-sync').question('enter a age = ');
var age3=require('readline-sync').question('enter a agen = ');
if (age1>age2 && age1>age3){
    console.log(age1,"Oldest")
}
else if (age2>age1 && age2>age3){
    console.log(age2,"Oldest")
}
else if (age3>age1 && age3>age2){
    console.log(age3,"Oldest")
}
else{
    console.log("Youngest")
}