var num=require('readline-sync').question('enter a no = ');
if (num%5==0 && num%11==0){
    console.log(num,"is devisible");
}
else{
    console.log(num,"is not divisible");
}