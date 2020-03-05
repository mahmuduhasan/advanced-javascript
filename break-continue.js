const nums =[1,2,3,4,5,6,7,8,9];
for(let i=0; i<nums.length;i++){
    
    if(nums[i]>6){
        break;
    }
    console.log(nums[i]);
}

const number =[10,2,30,40,5,6,7,80,9];
for(let i=0; i<number.length;i++){
    
    if(number[i]>9){
        continue;
    }
    console.log(number[i]);
}