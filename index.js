// export const high = (str: string) => {
//   const words = str.split(' ');
//   const scoresArray: number[] = [];
//   words.forEach(word => {
//     let wordScore = 0;
//     word.split('').forEach(char => {
//       const currCharScore = char.charCodeAt(0) - 96;
//       wordScore += currCharScore;
//     });
//     scoresArray.push(wordScore);
//   });
//   const indexOfMax = scoresArray.indexOf(Math.max.apply(Math, scoresArray));
//   return words[indexOfMax];
// };
// console.log(high('massage yes massage yes massage'));
// export function findOutlier(integers: number[]) {
//   return (integers.filter(num => num % 2 === 0)).length > 1 ? integers.filter(num => num % 2 !== 0)[0] : integers.filter(num => num % 2 === 0)[0];  
// }
// console.log(findOutlier([1, 2, 3]))
