function surfaceArea(R){
    var area = 4*(3.14*(R)**2);
    return area;
}
var R=3;
var output=surfaceArea(R);
console.log(output.toFixed(2));