// function validatePalindrome(str) {
//     let reverseStr = str.split('').reverse().join('');
//     console.log(reverseStr);
//     let flag = true;
//     for (let i in str) {
//         if (str.split('').shift() != reverseStr.split('').pop()) {
//             flag = false;
//         }
//     }
//     return flag == true ? true : false;
// }

// console.log(validatePalindrome('Succus'));

const text = 'A man, a plan, a canal: Panama';
const cleaned = text.toLowerCase();
console.log(cleaned);