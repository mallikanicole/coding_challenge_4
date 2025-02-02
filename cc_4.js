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
    console.log(`Inventory left: ${stock}`);
};//decrease stock until it reaches 0
console.log(`Inventory Depleted`)


//Task 4-Do...While Loop
var responses=0;
do {
    console.log(`Responses: ${responses}`);
    responses++;
} while (responses<3);//Collecting survey responses
console.log(`Survey Responses Recieved: ${responses}`)


//Task 5-For...in Loop
let employee={
    name:"Alice",
    position:"Manager",
    salary:"75000"
};//declare employee
let text="";
for (let x in employee) {
    console.log(`${text}${employee[x]}`);
};//for in loop


//Task 6-For...Of Loop
let products=["Laptop","Mouse","Keyboard"];//list products
for (const product of products) {
    console.log(`Product:${product}`);
};//for of loop


//Task 7-forEach()Method
let orders=[101,102,103];//list orders
orders.forEach(order => {
    console.log(`Order ID:${order}`);
});//list orders separately


//Task 8-Function Declaration
function calculateTax(amount){
    return amount*taxRate;
};//declare function
taxRate=.08;//define tax rate
console.log(`Tax:$${calculateTax(100)}`);//calculate and log tax


//Task 9-Function Expressions
function applyDiscount(price){
    return price*discountPercentage;
};//declare discount function
discountPercentage=.2
console.log(`Discounted Price:$${applyDiscount(300)}`);//apply discount and log price

//Task 10-Arrow Functions
function calculatePoints(purchaseAmount){
    return (purchaseAmount/10);
}
console.log(`Points Earned:${calculatePoints(500)}`);//calculate ponts earned on $500 purchase
