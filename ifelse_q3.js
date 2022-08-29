var num=require('readline-sync').question('enter a no = ');
if(num>0 && num<9){
    console.log(num,"positive");
}
else if(num<0){
    console.log(num,"negative");
}
else{
    console.log("zero");

}