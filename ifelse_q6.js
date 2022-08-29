let chr=require('readline-sync').question('enter a chr = ');
if (chr=='a' || chr=='e' || chr=='i' || chr=='o' || chr=='u' && chr=='A' || chr=='E' || 
chr=='I' || chr=='O'|| chr=='U'){
    console.log(chr,"is a vowel");
}
else{
    console.log(chr,"is a consonant");
}