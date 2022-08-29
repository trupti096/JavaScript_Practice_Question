let num=require('readline-sync').question('enter a no = ');
if (num%4==0){
    console.log(num,"leap year")
}
else{
    console.log(num,"not a leap year")
}