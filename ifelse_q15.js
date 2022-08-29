var Physics=require('readline-sync').question('enter a no = ');
var Chemistry=require('readline-sync').question('enter a no = ');
var Biology=require('readline-sync').question('enter a no = ');
var Mathematics=require('readline-sync').question('enter a no = ');
var Computer=require('readline-sync').question('enter a no = ');
var Percentage=(((Physics + Chemistry + Biology + Mathematics + Computer)/500)*100)
console.log("Percentage")
if (Percentage>=90){
    console.log("Grade A");
}
else if (Percentage>=80){
    console.log("Grade B");
}
else if (Percentage>=70){
    console.log("Grade C");
}
else if (Percentage>=60){
    console.log("Grade D");
}
else if (Percentage>=40){
    console.log("Grade E")
}
else{
    console.log("Grade F")
}