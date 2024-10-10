// let pinCode = "123456789"

// function pinCodeCheck (pinCode) {
//     // console.log(pinCode.length)
//     let result;
//     if(isNaN(pinCode)){
//         return result = "Pin code must be numeric"
//     }else if(pinCode.length > 7){
//         return result = "Pass"
//     }else if(pinCode.length < 7){
//         return result = "Fail"
//     }
// }
// let result = pinCodeCheck(pinCode);
// console.log(result); 
// รหัส pin มีความยาวมากกว่า 7 ตัว result จะแสดงข้อความว่า "Pass" 
// หากน้อยกว่า 7 ตัว result จะแสดงข้อความว่า "Fail"
// หากไม่ใช่ตัวเลข result จะแสดงข้อความว่า " Pin code must be numeric"

//////////////////////////////////////////
// const product = [
//     {
//       id: 1,
//       name: "guitar",
//       price: 1000,
//       category: "music"
//     },
//     {
//       id: 1,
//       name: "door",
//       price: 3000,
//       category: "home"
//     },
//     {
//       id: 1,
//       name: "piano",
//       price: 3000,
//       category: "music"
//     },
//     {
//       id: 1,
//       name: "computer",
//       price: 10000,
//       category: "IT"
//     },
//   ];

// // สร้าง Function ที่สามารถลดราคาของสินค้าแต่ละประเภทได้ 
// // category music discount 30% 
// // category home discount 5%
// // category IT discount 10% 

// //additional
// // ค่า price ใน product จะต้องเปลี่ยนจากค่าเดิมเป็นค่าใหม่ที่ถูกลดราคาแล้ว
// // ค่า price จะแสดงทศนิยม 2 ตำแหน่ง 

// function discount(index){
//     if(product[index].category === "IT"){
//         product[index].price = (product[index].price * (1-0.1)).toFixed(2)
//     }else if(product[index].category === "music"){
//         product[index].price = (product[index].price * (1-0.3)).toFixed(2)
//     }else if(product[index].category === "home"){
//         product[index].price = (product[index].price * (1-0.05)).toFixed(2)
//     }
// }

// for(let i = 0; i < product.length ; i++){
//     discount(i)
// }

// console.log(product)


//ผลลัพธ์ดังนี้
// [
//   { id: 1, name: 'guitar', price: '700.00', category: 'music' },
//   { id: 1, name: 'door', price: '2850.00', category: 'home' },
//   { id: 1, name: 'piano', price: '2100.00', category: 'music' },
//   { id: 1, name: 'computer', price: '9000.00', category: 'IT' }
// ]
////////////////////////////////////////////////////////
let users = [
  {
      name: "Abby",
      age: 25,
      answer: (age) => `is ${age} years old, `,
      favoriteColor: "blue"
  },
  {
      name: "Bright",
      age: 22,
      answer: (age) => `is ${age} years old, `,
      favoriteColor: "green"
  },
  {
      name: "Cher",
      age: 18,
      answer: (age) => `is ${age} years old, `,
      favoriteColor: "red"
  },
  {
      name: "Disc",
      age: 40,
      answer: (age) => `is ${age} years old, `,
      favoriteColor: "yellow"
  }
];

// Example usage:
function userTeller(users, name, cb) {
  for (let i = 0; i < users.length; i++) {
    if (name === users[i].name) {
      const age =  users[i].answer(users[i].age); 
      return `${users[i].name} ${age} ${cb(users[i].name, users[i].favoriteColor)}`; 
    }
  }
  return `User ${name} not found.`; 
}

let result1 = userTeller(users, "Abby", (name, color) => `${name} likes ${color} color`);
let result2 = userTeller(users, "Bright", (name, color) => `${name} likes ${color} color`);
let result3 = userTeller(users, "Cher", (name, color) => `${name} likes ${color} color`);
let result4 = userTeller(users, "Disc", (name, color) => `${name} likes ${color} color`);
let result5 = userTeller(users, "blablabla", (name, color) => `${name} likes ${color} color`);


// เขียน Function ที่มีการ Return ผลลัพธ์ดังนี้ :
// เงื่อนไข 1 : ต้องใช้ Value ของ Argument ทุกตัว
// เงื่อนไข 2 : Value ที่ Return กลับมาห้ามเขียน String (สามารถ Return เป็น `${} ได้`)  
console.log(result1); // Output: 'Abby is 25 years old, Abby likes blue color'
console.log(result2); // Output: 'Bright is 22 years old, Bright likes green color'
console.log(result3); // Output: 'Cher is 18 years old, Cher likes red color'
console.log(result4); // Output: 'Disc is 40 years old, Disc likes yellow color'
console.log(result5); // Output: 'User blablabla not found.'