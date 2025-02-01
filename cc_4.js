let purchaseValue=400
if (purchaseValue>100) {
    console.log("Discount:",purchaseValue*.1)
} else {
    console.log("No Discount")
}
const finalAmount=purchaseValue-(purchaseValue*.1)
console.log("Final Amount After Discount:",finalAmount)
