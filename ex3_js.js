function surfaceAreaofSphere(R){
    var area = 4*3.14*(R**2);
    
    return area;
}
var R = parseInt(gets());
console.log(surfaceAreaofSphere(R).toFixed(2));