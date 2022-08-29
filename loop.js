//while loop

var i=0;
while (i<=10){
    console.log(i);
    i++;
}


//do while loop

var i=0;
do{
    console.log(i);
    i++;
}
while (i<=10);


//for loop

for(var i=0; i<=10; i++){
    console.log(i);
}


//for in loop

var fruits=["Apple","Banana","Mango"];
for(fruit in fruits){
    console.log(fruits[fruit]);
}


//for of loop

lists=["a","b","c","d","e"];
for(let list of lists){
    console.log(list)
}