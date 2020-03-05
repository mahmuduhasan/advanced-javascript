function add(num1,num2){
    // console.log([...arguments]);
    // return num1 + num2 + arguments[2];
    
    var fetch = [...arguments];
    var sum =0
    for(var i=0; i<fetch.length;i++){
        var take = fetch[i];
        
        sum = sum+ take;
    }
    return sum;
}
var value = add(2,3,5,7);
console.log(value);