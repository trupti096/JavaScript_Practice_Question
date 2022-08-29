let chr=require('readline-sync').question('enter any character = ');
if (chr>='a' && chr<='z' || chr>='A' && chr<='Z'){
    console.log(chr,"is a character");
}
else if (chr>0 || chr<9){
    console.log(chr,"is a digit");
}
else{
    console.log(chr,"chr is a special character");
}