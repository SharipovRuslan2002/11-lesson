
// 1-masala

// let input_str = 'George Raymond Richard Martin';
// let output = input_str.split(' ').map(word => word[0]).join('')
// console.log(output)

// 2-masala

// let input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ]
  
//   input.sort((a, b) => a.age - b.age);
//   let input_str = input[0].age;
//   let age = input[input.length - 1].age;
//   let output = age - input_str;
  
//   console.log(output)
  
// 3-masala

// function text_fn(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true
// }
// let  testCases = [
//     { p: [1,2,3], q: [1,2,3] },
//     { p: [1,2], q: [1,null,2] },
//     { p: [1,2,1], q: [1,1,2] }
// ]
// testCases.forEach((testCase, index) => {
//     let  { p, q } = testCase;
//     let  result = text_fn(p, q);
//     console.log(`Test case ${index + 1}: ${result}`);
// })


// 4-masala

// let obj = {a: 2, b: 5, c: 7}
// let result = Object.entries(obj).map(([key, value]) => key + value)
// console.log(result)


// 5-masala

// function getTruthyFalsy(arr) {
//     let  truthy = arr.filter(element => !!element)
//     let  falsy = arr.filter(element => !element)
//     return { truthy, falsy }
// }

// let  input = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// let  result = getTruthyFalsy(input)
// console.log(result)


// 6-masala

// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']

// function count(arr) {
//     let wordCounts = {}
//     arr.forEach(word => {
//         if (wordCounts[word]) {
//             wordCounts[word]++
//         } else {
//             wordCounts[word] = 1
//         }
//     })
//     return wordCounts
// }
// let result = count(animals)
// console.log(result)


// 7-masala

// let obj = {a: 2, b: 3, c: 4}
// let n = 3

// function Values(obj, n) {
//     let res = {}
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             res[key] = obj[key] * n
//         }
//     }
//     return res
// }
// let result = Values(obj, n)
// console.log(result)


// 8-masala

// let  strings = ["text", "world", "laptop"]

// function createObject(array) {
//     let  obj = {}
//     array.forEach(str => {
//         obj[str] = str.length
//     })
//     return obj
// }
// let  result = createObject(strings)
// console.log(result)

// 9-masala


// function Number(arr) {
//     let length = arr.length;
//     let sortedArr = arr.sort((a, b) => a - b);
    
//     if (length % 2 === 0) {
//         let input_Index = length / 2;
//         let number3 = (sortedArr[input_Index - 1] + sortedArr[input_Index]) / 2;
//         return number3;
//     } else { 
//         let Index = Math.floor(length / 2);
//         return sortedArr[Index];
//     }
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4];
// let number1 = Number(arr1);
// let number2 = Number(arr2);
// console.log("Middle number of", arr1,  number1);
// console.log("Middle number of", arr2,  number2);


// 10-masala

// function countWordsWithLetterA(str) {
//     let  words = str.split(" ");
//     let count = 0;
//     words.forEach(word => {
//         if (word.includes("a")) {
//             count++;
//         }
//     });
//     return count;
// }
// let  str = "men najot talimda dasturlash kursida o'qiman ";
// let  result = countWordsWithLetterA(str);
// console.log("kiritilgan so'zda a harfi", result, "marta ishlatildi.");
