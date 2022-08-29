var chr=require('readline-sync').question('enter a charcter = ');
if(chr>='a' && chr<='z' || chr>='A' && chr<='Z'){
    console.log(chr,"is an alphabet");
}
else{
    console.log(chr,"is not an alphabet");
}