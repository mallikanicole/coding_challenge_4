//Task 1-If Statements
let purchaseValue=400;//state purchase value
console.log("Purchase Value",purchaseValue)
if (purchaseValue>100) {
    console.log("Discount:",purchaseValue*.1)
} else {
    console.log("No Discount")
};//state whether discount or not
const finalAmount=purchaseValue-(purchaseValue*.1);//calculate discounted price
console.log("Final Amount After Discount:",finalAmount)


