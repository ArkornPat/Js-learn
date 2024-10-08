// let temp = [85, 75, 77, 212, 84, 91];
// const tempcel = []
// for (let i = 0; i < temp.length; i++) {
//     tempcel.push((temp[i] - 32) / 1.8)
// }
// console.log(tempcel)
//////////////////////////////////////////////////////////////////////
// let priceList = [20,30,10,60]
// let totalPrice = 0;

// for(let i = 0; i<priceList.length;i++){
//     totalPrice += priceList[i]
// }

// let totalreduce = priceList.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// },0)
// console.log(totalreduce)

// console.log('totalPrice : ' + totalPrice)
// if(totalPrice > 100){
//     console.log("เงินไม่พอ")
// }else {
//     console.log("เงินน่าจะพอ");   
// }
//////////////////////////////////////////////////////////////////////
// let priceList = [20, 30, 10, 40];
// let max = priceList[0]; 

// for (let i = 0; i < priceList.length; i++) {
//     if (priceList[i] > max) {
//         max = priceList[i]; 
//     }
// }
// console.log("Max value is: " + max);

// let Max = priceList.reduce((acc,current)=>{
//     return Math.max(acc, current)
// },0)
// console.log(Max)
//////////////////////////////////////////////////////////////////////

// const toyInventory = [
//     {product:"A",quantity:100},
//     {product:"A",quantity:65},
//     {product:"A",quantity:55},
//     {product:"A",quantity:0},
//     {product:"A",quantity:7},
//     {product:"A",quantity:70},
//     {product:"A",quantity:1},
//     {product:"A",quantity:1},
// ]

// let maxQuantity = toyInventory[0].quantity
// let maxToyInventory = toyInventory[0].product

// for(let i = 0; i< toyInventory.length; i++){
//     if(toyInventory[i].quantity > maxQuantity){
//         maxQuantity = toyInventory[i].quantity
//         maxToyInventory = toyInventory[i].product
//     }
// }

// console.log(`สีตุ๊กตาที่มากที่สุดคือ ${maxToyInventory} ${maxQuantity} ตัว`)
//////////////////////////////////////////////////////////////////////

let word = "elephant"
let countE = 0
let countE2 = 0
for(let i = 0; i<word.length;i++){
    if(word[i].toLowerCase() === "e"){
        countE += 1 
    }
}
for(let i of word){
    if(i.toLowerCase() === "e"){
        countE2 += 1 
    }
}

console.log(countE)
console.log(countE2)