let chr=require('readline-sync').question('enter any character = ');
if (chr>='A' && chr<='Z'){
    console.log(chr,"is uppercase")
}
else if (chr>='a' && chr<='z'){
    console.log(chr,"is lowercase")
}