//Task 1-If Statements
let purchaseValue=400;//state purchase value
console.log("Purchase Value",purchaseValue)
if (purchaseValue>100) {
    console.log("Discount:",purchaseValue*.1)
} else {
    console.log("No Discount")
};//state whether discount or not
const finalAmount=purchaseValue-(purchaseValue*.1);//calculate discounted price
console.log(`Final Amount After Discount: $${finalAmount}`)


//Task 2-For Loop
const sales=[120,85,200,150,90]
let sum=0
for(let i=0; i<sales.length; i++){
    sum+=sales[i];
};//use for loop to find sum of sales
console.log(`Total Sale`,sum)


//Task 3-While Loop
var stock=10;
while(stock>0){
    stock--;
    console.log(stock);
}
