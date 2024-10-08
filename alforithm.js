// function a (numbers){
//     let b = {
//         positive : 0,
//         negative : 0,
//         zero:0
//     }
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > 0){
//             b.positive++
//         }else if (numbers[i]<0){
//             b.negative++
//         }else{
//             b.zero++
//         }
//     }
//     return b
// }

// let n1 = [3,-5,0,12,-7]
// console.log(a(n1))

// function countDogByBreed(breedArray) {
//     const breedCount = {};

//     for (let breed of breedArray) {
//         if (breedCount[breed]) {
//             breedCount[breed]++;
//         } else {
//             breedCount[breed] = 1;
//         }
//     }
//     return breedCount;
// }

// const breedArray1 = [
//     "Beagle",
//     "Labrador Retriever",
//     "Golden Retriever",
//     "Bulldog",
//     "Golden Retriever",
//     "Poodle",
//     "Beagle",
//     "Beagle"
// ];

// console.log(countDogByBreed(breedArray1));

function countDogByBreed(breedArray) {
    // สร้าง object ว่างเพื่อเก็บจำนวนของแต่ละสายพันธุ์
    const breedCount = {};

    // ใช้ for loop ปกติเพื่อวนลูปผ่าน breedArray
    for (let i = 0; i < breedArray.length; i++) {
        const breed = breedArray[i];

        // ถ้ามีสายพันธุ์นี้อยู่ใน object แล้ว ให้บวกค่าเพิ่ม
        if (breedCount[breed]) {
            breedCount[breed]++;
        } else {
            // ถ้ายังไม่มีใน object ให้เริ่มนับเป็น 1
            breedCount[breed] = 1;
        }
    }
    return breedCount;
}

const breedArray1 = [
    "Beagle",
    "Labrador Retriever",
    "Golden Retriever",
    "Bulldog",
    "Golden Retriever",
    "Poodle",
    "Beagle",
    "Beagle"
];

console.log(countDogByBreed(breedArray1));

