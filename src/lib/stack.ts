// function solution(s) {
//   const stack = [];
//   // ( 는 넣기만 하고
//   // ) 는 빼기만 하는 구조
//   // s = "(())"
//   for (let word of s) {
//     if (word === "(") {
//       stack.push(word);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       stack.pop();
//     }
//   }

//   return stack.length === 0;
// }
