
function ouma() {
    var y=120,
        x="";
        while(y>0){
            x=(y%2) +x;
            y=Math.floor(y/2);
        }
        return x;
}
console.log(ouma());



// var decimal = 456;
// var binary = decimal.toString(16);
// console.log("Le nombre binaire est " + binary);

