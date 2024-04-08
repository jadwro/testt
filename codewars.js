var TestEnum;
(function (TestEnum) {
    TestEnum["Value1"] = "Value1";
    TestEnum["Value2"] = "Value2";
    TestEnum["Value3"] = "Value3";
})(TestEnum || (TestEnum = {}));
const aaa = TestEnum.Value2 || TestEnum.Value1;
console.log(aaa);
// type Customer = {
//   paymentReference: string,
//   refundReference: string
// } & {[key: string]: string}
// function createCustomer(): Customer {
//   return {
//     paymentReference: "payRef",
//     refundReference: "refundRef"
//   }
// }
// let customer: Customer = createCustomer();
// customer["paymentReference"] = "bbb";
// customer["newField"] = "newValue";
// const obj = {
//   aaa: "bbb",
//   ccc: "ddd",
//   fdfd: "fdsfds"
// }
// let result = {};
// for(const [key, val] of Object.entries(obj)) {
//   // console.log(`${key}: ${val}`)
//   if(key.length < 4) {
//     result = {
//       ...result,
//       [key]: val
//     }
//   }
// } 
// console.log(result)
// export function multiplicationTable (size: number): number[][] {
//   const result: number[][] = [];
//   for(let i = 1; i <= size; i++) {
//     const row: number[] = [];
//     for(let j = 1; j <= size; j++) {
//       row.push(i * j);
//     }
//     result.push(row);
//   }
//   return result;
// }
// console.log(multiplicationTable(3));
// export function inArray(a1: string[], a2: string[]): string[] {  
//   return a1.map(word => {
//     if(a2.filter(el => el.indexOf(word) > -1).length > 0) return word;
//   }).filter(Boolean).sort() as string[];
// }
// var a1:string[] = ["live", "strong", "lyal", "lysh", "arp"];
// var a2:string[] = ["lively", "alive", "harp", "sharp", "armstrong"];
// console.log(inArray(a1, a2));
// export function beeramid(bonus: number, price: number): number {
//   const beers = Math.floor(bonus / price);
//   let numOfLevels: number = 0;
//   let beersLeft = beers;
//   if(beers === 1) return 1;
//   for(let i = 1; i < Math.sqrt(beers); i++) {
//     const beersOnCurrentLvl = i ** 2;
//     if(beersLeft - beersOnCurrentLvl < 0) break;
//     beersLeft -= beersOnCurrentLvl;
//     numOfLevels = i;
//   }
//   return numOfLevels;
// }
// console.log(beeramid(4, 4));
// function closeDivTagsWhichAreNotClosed(html: string): string {
//   const allIndexes = [...html.matchAll(/<div>/g)].map(el => el.index);
//   for(let i = 0; i < allIndexes.length; i++) {
//     if(i % 2 !== 0) {
//       html = html.substring(0, allIndexes[i]) + '</div>' + html.substring(allIndexes[i] + 5);
//     }
//   }
//   return html;
// }
// console.log(closeDivTagsWhichAreNotClosed('<div><p>Here is a <div> tag</p>'))
// console.log(closeDivTagsWhichAreNotClosed('<div><div><div>'))
// function capitalize(str: string): string {
//   return str.split(' ').map((word) => {
//     return word.split('').map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('');
//   }).join(' ');
// }
// console.log(capitalize('hello world'));
// export function numPrimorial(n: number): number {
//   const primes: number[] = [];
//   let currentNumber = 2;
//   while(primes.length < n) {
//     if(isPrime(currentNumber)) {
//       primes.push(currentNumber);
//     }
//     currentNumber++;
//   }
//   return primes.reduce((a, b) => a * b);
// }
// function isPrime(num: number): boolean {
//   if(num <= 1) return false;
//   const tries = num < 1000 ? num : 1000;
//   let isPrime = true;
//   for(let i = 2; i < tries; i++) {
//     if(num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime;
// }
// console.log(numPrimorial(5));
// export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
//   if(listOfArt.length === 0 || listOfCat.length === 0) return '';
//   let resultArr: {
//     category: string;
//     quantity: number;
//   }[] = [];
//   for(const category of listOfCat) {
//     listOfArt.forEach(el => {
//       const bookCode = el[0];
//       if(bookCode === category) {
//         const quantity = +el.split(' ')[1];        
//         const isCategory = resultArr.filter(cat => cat.category === category).length > 0;
//         if(isCategory) {
//           const index = resultArr.findIndex(el => el.category === category);
//           resultArr[index].quantity += quantity;
//         } else {
//           resultArr.push({category: category, quantity: quantity});
//         }
//       }
//     });
//   }
//   const missing = listOfCat.filter(el => !resultArr.some(obj => obj.category === el)).map(el => el.toString());
//   for(const entry of missing) {
//     resultArr.push({category: entry, quantity: 0});
//   }
//   resultArr.sort((a, b) => {
//     const indexA = listOfCat.indexOf(a.category);
//     const indexB = listOfCat.indexOf(b.category);
//     return indexA - indexB;
//   });
//   let result = '';
//   for(let i = 0; i < resultArr.length; i++) {
//     const separator = i === resultArr.length-1 ? '' : ' - ';
//     result += `(${resultArr[i].category} : ${resultArr[i].quantity})${separator}`;
//   }
//   return result;
// }
// const b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
// const c = ["A", "B", "C", "D"];
// console.log(stockList(b, c));
//fail
// export function toRange(arr: number[]): string {
//   const range: number[] = [];
//   let left = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i+1] - arr[i] === 1 || i !== arr.length - 1) {
//       range.push(arr[i]);
//     } else {
//       left = arr[i];
//     }
//   }
//   return `${Math.min(...range)}_${Math.max(...range)},${left}`;
// }
// export function toArray(str: string): number[] {
//   const min = +str.split('_')[0];
//   const max = +str.split('_')[1].split(',')[0];
//   const left = +str.split('_')[1].split(',')[1];
//   const result: number[] = [];
//   for(let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   result.push(left);
//   return result;
// }
// console.log(toRange([3,4,5,6,9]));
// console.log(toArray('3_6,9'));
// export function compare(a: string, b: string): string {
//   const aScore = calculateScore(a);
//   const bScore = calculateScore(b);
//   if(aScore.idCount !== bScore.idCount) {
//     return aScore.idCount > bScore.idCount ? a : b;
//   } else if(aScore.classCount !== bScore.classCount) {
//     return aScore.classCount > bScore.classCount ? a : b;
//   } else if(aScore.numberOfElements !== bScore.numberOfElements) {
//     return aScore.numberOfElements > bScore.numberOfElements ? a : b;
//   } else {
//     return b;
//   }
// }
// function calculateScore(str: string) {
//   let tagCount = 0;
//   let classCount = 0;
//   let idCount = 0;
//   str.split(' ').forEach(el => {
//     if(el.includes('*')) el = '';
//     if(!el.startsWith('.') && !el.startsWith('#') && el !== '') tagCount++;
//     if(el.includes('.')) classCount += calculateOccurences(el, '.');
//     if(el.includes('#')) idCount += calculateOccurences(el, '#');
//   });
//   const numberOfElements = tagCount + classCount + idCount;
//   return {tagCount, classCount, idCount, numberOfElements};
// }
// function calculateOccurences(str: string, symbol: string) {
//   return str.split(symbol).length - 1;
// }
// console.log(compare("p", "*"));
// export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
// export const phone = (strng: string, num: string): string => {
//   const entriesArr = strng.split('\n');
//   const patternName = /<[a-zA-Z| ]*>/gm;
//   const patternPhone = /\+[\d]{1,2}-[\d]{3}-[\d]{3}-[\d]{4}/gm;
//   let result: string = '';
//   for(const entry of entriesArr) {
//     if(entry.includes(num)) {
//       console.log(entry)
//     }
//     const phone = patternPhone.exec(entry);
//   }
//   return '';
// } 
// const s = '/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n';
// console.log(phone(s, '1-541-754-3010'));
// export function sumPairs(ints: number[], s: number): [number, number] | void {  
//   const set = new Set<number>();
//   let results: number[][] = [];
//   for(let i = 0; i < ints.length; i++) {
//     const element = ints[i];
//     if(set.has(s - element)) {
//       const index2 = i;
//       results.push([s - element, element, index2]);
//     } else {
//       set.add(element);
//     }
//   }
//   if(results.length === 0) return;
//   const sorted = results.sort((a, b) => a[2] - b[2]);
//   return [sorted[0][0], sorted[0][1]];
// }
// console.log(sumPairs([11, 3, 7, 5], 10));
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// export function validISBN10(isbn: string): boolean {
//   const pattern = /^[0-9]{9}[0-9]|X$/g;  
//   if(!pattern.test(isbn)) return false;
//   if(isbn.endsWith('X')) isbn = isbn.replace('X', '10');
//   const products: number[] = [];
//   for(let i = 1; i <= 10; i++) {
//     let currentEl = +isbn[i-1];
//     if(isbn.length > 10 && i === 10) currentEl = 10;
//     products.push(currentEl * i);
//   }
//   return products.reduce((a, b) => a + b) % 11 === 0;
// }
// console.log(validISBN10('048665088XZ'));
// export function rgb(r: number, g: number, b: number): string {
//   const arr = [r, g, b].map(el => {
//     if(el < 0) return 0;
//     if(el > 255) return 255;
//     return el;
//   });
//   const [ rConverted, gConverted, bConverted ] = arr;
//   const rHex = rConverted.toString(16).toUpperCase();
//   const gHex = gConverted.toString(16).toUpperCase();
//   const bHex = bConverted.toString(16).toUpperCase();
//   const result = [rHex, gHex, bHex].map(el => el.length === 1 ? `0${el}` : el).join('');
//   return result;
// }
// console.log(rgb(0, 0, 0))
// FAIL
// export const getPages = (length: number, currentPage: number, size: number): number[] => {
//   if(length === 1) return [];
//   let beforeCurrent: number[] = [];
//   const afterCurrent: number[] = [];
//   for(let i = 1; i <= size; i++) {
//     if(currentPage - i <= 1) break;
//     beforeCurrent.push(currentPage - i);
//   }
//   for(let i = 1; i <= size; i++) {
//     afterCurrent.push(currentPage + i);
//   }
//   beforeCurrent = beforeCurrent.reverse();
//   console.log(beforeCurrent)
//   if(beforeCurrent[0] === 1) {
//     beforeCurrent.shift();
//   }
//   if(currentPage === length) {
//     return [1, ...beforeCurrent, length];
//   }
//   const middle = [...beforeCurrent, currentPage, ...afterCurrent];
//   console.log(middle)
//   return [1, ...middle, length];
// };
// console.log(getPages(36, 1, 5));
// function isPrime(num) {
//   if(num <= 1) return false;
//   const tries = num < 1000 ? num : 1000;
//   let isPrime = true;
//   for(let i = 2; i < tries; i++) {
//     if(num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   return isPrime;
// }
// console.log(isPrime(2))
// console.log(isPrime(73))
// console.log(isPrime(75))
// ---------- FAIL ---------
// export const mix = (s1: string, s2: string): string => {
//   const lowerCaseLetters1 = s1.replace(/([^a-z])/g, '').split('');
//   const lowerCaseLetters2 = s2.replace(/([^a-z])/g, '').split('');
//   const map1 = findDuplicates(lowerCaseLetters1);
//   const map1Letters = map1.map(el => el[0]);
//   const map1Count = map1.map(el => el[1]);
//   const map2 = findDuplicates(lowerCaseLetters2);
//   const map2Letters = map2.map(el => el[0]);
//   const map2Count = map2.map(el => el[1]);
//   const sum = [...map1Letters, ...map2Letters];
//   const same: string[] = Array.from(new Set(sum));
//   same.pop()
//   console.log(map1Letters)
//   console.log(map2Letters)
//   const result = [];
//   for(let i = 0; i < same.length; i++) {
//     const indexOf1 = map1Letters.indexOf(same[i]);
//     const indexOf2 = map2Letters.indexOf(same[i]);
//     console.log(same[i])
//     console.log({indexOf1})
//     console.log({indexOf2})
//     if(map1Count[indexOf1] > map2Count[indexOf2]) {
//       result.push(`1:${same[i].repeat(map1Count[indexOf1])}`);
//     } else if(map1Count[indexOf1] === map2Count[indexOf2]) {
//       result.push(`=:${same[i].repeat(map1Count[indexOf1])}`);
//     } else {
//       result.push(`2:${same[i].repeat(map1Count[indexOf2])}`);
//     }
//   }
//   console.log(result)
//   return "";
// }
// function findDuplicates(arr: string[]): [string, number][] {
//   const map = new Map<string, number>();
//   for(const element of arr) {
//     if(map.has(element)) {
//       map.set(element, map.get(element)! + 1);
//     } else {
//       map.set(element, 1);
//     }
//   }
//   const result: [string, number][] = [];
//   for(const [element, count] of map.entries()) {
//     if(count > 1) {
//       result.push([element, count]);
//     }
//   }
//   return result.sort((a, b) => b[1] - a[1]);
// }
// console.log(mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &"));
// const variance = (numbers: number[]) => {
//   const mean = numbers.reduce((a, b) => a + b) / numbers.length;
//   const squares = numbers.map(el => Math.pow(el - mean, 2));
//   const result = squares.reduce((a, b) => a + b) / numbers.length;
//   return result.toFixed(4);
// }
// console.log(variance([-10, 0, 10, 20, 30]));
// export function amIAfraid(day: string, num: number): boolean {
//   switch(day) {
//     case "Monday": return num === 12;
//     case "Tuesday": return num > 95;
//     case "Wednesday": return num === 34;
//     case "Thursday": return num === 0;
//     case "Friday": return num % 2 === 0;
//     case "Saturday": return num === 56;
//     case "Sunday": return num === 666 || num === -666;    
//   }
//   return false;
// }
// console.log(amIAfraid("Sunday", -666));
// export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
//   let difference = startPriceNew - startPriceOld;
//   if(difference <= 0) {
//     return [0, Math.abs(difference)]; 
//   }
//   let monthsCounter = 0;
//   let currentPriceOld = startPriceOld;
//   let currentPriceNew = startPriceNew;
//   while(difference > 0) {
//     monthsCounter++;
//     if(monthsCounter % 2 === 0 && monthsCounter !== 0) percentLossByMonth += 0.5; 
//     const savings = monthsCounter * savingperMonth;
//     const loss = percentLossByMonth * 0.01;
//     const priceDownOld = currentPriceOld * loss;
//     const priceDownNew = currentPriceNew * loss;
//     currentPriceOld -= priceDownOld;
//     currentPriceNew -= priceDownNew;
//     difference = currentPriceNew - currentPriceOld - savings;
//   }
//   return [monthsCounter, Math.round(Math.abs(difference))];
// }
// console.log(nbMonths(2000, 8000, 1000, 1.5));
// export function breakChocolate(n: number, m: number): number {
//   if(n === 0 && m === 0 || n === 1 && m === 1) return 0;
//   return n*m-1;
// }
// console.log(breakChocolate(5,5))
// console.log(breakChocolate(0,0))
// export function alphanumeric(string: string): boolean {
//   if(string.length < 1) return false;
//   const pattern = /^[a-zA-Z0-9]*$/gi;
//   return pattern.test(string)
// }
// console.log(alphanumeric('xkQtJS_ub3T0'));
// export function nthFibo(n: number): number {
//   if(n <= 1) return 0;
//   let result = [0, 1];
//   for(let i = 2; i < n; i++) {
//     const nextElement = result[i-2] + result[i-1];
//     result.push(nextElement);
//   }
//   return +result.slice(-1);
// }
// console.log(nthFibo(1));
// export function parse(data: string): number[] {
//   let currentValue = 0;
//   const result: number[] = [];
//   for(let i = 0; i < data.length; i++) {
//     switch(data[i]) {
//       case 'i':
//         currentValue += 1;
//         break;
//       case 'd':
//         currentValue--;
//         break;
//       case 's':
//         currentValue = currentValue ** 2;
//         break;
//       case 'o':
//         result.push(currentValue);
//         break;
//     }    
//   }
//   return result;
// }
// console.log(parse('iiisxxxdoso'));
// export function cleanString(s: string, newArr: string[] = []): string {
// 	const HASH = '#';
//   if(newArr.length === 0) newArr = [...s];
//   if(newArr.includes(HASH)) {
//     if(newArr.indexOf(HASH) - 1 < 0) {
//       newArr.splice(newArr.indexOf(HASH), 1); 
//     } else {
//       newArr.splice(newArr.indexOf(HASH) - 1, 2);
//     }
//     cleanString(newArr.join(''), newArr);
//   }
//   return newArr.join('').length > 0 ? newArr.join('') : ''; 
// }
// console.log(cleanString('m###aJNw3h####f'));
// export const decompose = (n: number, current: number = n**2, start: number = n - 1): number[] | null => {
//   if(current === 0) {
//     return [];
//   }
//   for(let i = start; i >= 1; i--) {
//     const next = current - i**2;
//     if(next >= 0) {
//       const result = decompose(n, next, i - 1);
//       if(result !== null) {
//         result.push(i);
//         return result;
//       }
//     }
//   }
//   return null;
// };
// console.log(decompose(50));
// export function rot13(str: string): string {
//   const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const result = str.split('').map(char => {
//     if((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)) {
//       let newIndex: number;
//       if(uppercaseAlphabet.indexOf(char) + 13 > uppercaseAlphabet.length - 1) {
//         newIndex = 13 - ((uppercaseAlphabet.length) - uppercaseAlphabet.indexOf(char));
//       } else {
//         newIndex = uppercaseAlphabet.indexOf(char) + 13;
//       }
//       const newChar = uppercaseAlphabet[newIndex];
//       return newChar;
//     } else if((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
//       let newIndex: number;
//       if(lowercaseAlphabet.indexOf(char) + 13 > lowercaseAlphabet.length - 1) {
//         newIndex = 13 - ((lowercaseAlphabet.length) - lowercaseAlphabet.indexOf(char));
//       } else {
//         newIndex = lowercaseAlphabet.indexOf(char) + 13;
//       }
//       const newChar = lowercaseAlphabet[newIndex];
//       return newChar;
//     } else {
//       return char;
//     }
//   });
//   return result.join('');
// }
// console.log(rot13("EBG13 rknzcyr."));
// export function partsSums(ls: number[]): number[] {
//   if(ls.length === 0) return [0];
//   const result: number[] = [];
//   const tempArr: number[] = [...ls];
//   for(let i = 0; i < ls.length; i++) {
//     const sum = tempArr.reduce((a, b) => a + b, 0);
//     result.push(sum);
//     tempArr.shift();
//     if(tempArr.length === 0) {
//       result.push(0);
//       break;
//     }
//   }
//   return result;
// }
// console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));
// export function maskify(cc: string): string {
//   if(cc.length <= 4) return cc;
//   const hash = '#'.repeat(cc.length - 4);
//   return `${hash}${cc.slice(hash.length)}`;
// }
// console.log(maskify('4556364607935616'));
// type matrix = number[][];
// export function matrixAddition(a: matrix, b: matrix): matrix {
//   const result = a.map((el, i) => {
//     const added = el.map((num, i2) => {
//       return num += b[i][i2];
//     });
//     return added;
//   });
//   return result;
// }
// console.log(matrixAddition(
//   [ [1, 2],
//     [1, 2] 
//   ],
//   [ [2, 3],
//     [2, 3] 
//   ]));
// export function solution(start: number, finish: number) {
//   let counter = 0;
//   let currentShelf = start;
//   for(let i = start; i <= finish; i++) {
//     if(currentShelf + 3 <= finish) {
//       currentShelf += 3;
//     } else if(currentShelf + 1 <= finish) {
//       currentShelf += 1;
//     } else {
//       break;
//     }
//     counter++;
//   }
//   return counter;
// }
// console.log(solution(1, 5));
// export function between(a: number, b: number): number[] {
//   const result: number[] = [];
//   for(let i = a; i <= b; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(between(1, 4));
// export const findOdd = (xs: number[]): number => {
//   if(xs.length === 1) return xs[0];
//   const tempArr: number[] = [];
//   for(let i = 0; i < xs.length; i++) {
//     const numOfOccurs = xs.filter(el => el === xs[i]).length;
//     tempArr.push(numOfOccurs);
//   }
//   // const indexOfElement = tempArr.map((el, i) => {
//   //   if(el % 2 !== 0) {
//   //     return i;
//   //   }
//   // }).filter(el => el !== undefined)[0];
//   const indexOfElement = tempArr.findIndex(el => el % 2 !== 0);
//   return xs[indexOfElement];
// };
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
// export function findNeedle(haystack: any[]): string {
//   return `found the needle at position ${haystack.indexOf('needle')}`;
// }
// export function generateChatRoomNames(users: string[]): string[] {
//   let obj: {name: string, surname: string}[] = [];
//   users.forEach(user => {
//     const [firstName, surname] = user.split(' ');
//     obj.push({name: firstName, surname: surname});
//   });
//   const isUnique = obj.reduce(user => user.name)
// }
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe"]));
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"]));
// function solution(A: number[], K: number): number[] {
//   if(A.length === 0) return A;
//   for(let i = 0; i < K; i++) {
//     A.splice(0, 0, A.pop());
//   }
//   return A;
// }
// console.log(solution([], 1));
// function solution(n: number): number {
//   const binary = decimalToBinary(n);
//   let zeros = binary.split('1');
//   if(zeros[zeros.length - 1].includes('0')) {
//     zeros.pop();
//   }
//   return zeros.filter(el => el !== '').reduce((maxLength, str) => Math.max(maxLength, str.length), 0);
// }
// function decimalToBinary(n: number): string {
//   let binary = '';
//   while (n > 0) {
//     binary = (n % 2) + binary;
//     n = Math.floor(n / 2);
//   }
//   return binary;
// }
// console.log(solution(32));
// export function getBestCombination(time: number): string {
//   if(time <= 60) return time.toString();
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const secondsString = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
//   const method1 = minutes.toString() + secondsString;
//   let method2: string = '';
//   if(time <= 99) {
//     method2 = time.toString();
//   } else {
//     const minutes = Math.ceil((time - 99) / 60);
//     const seconds = time - (minutes*60);
//     const secondsString = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
//     method2 = minutes.toString() + secondsString;
//   }
//   let result1: number = 0;
//   let result2: number = 0;
//   for(let i = 0; i < method1.length; i++) {
//     if(method1[i] !== method1[i+1]) result1++;
//   }
//   for(let i = 0; i < method2.length; i++) {
//     if(method2[i] !== method2[i+1]) result2++;
//   }
//   if(result1 < result2) {
//     return method1;
//   } else if(result2 < result1) {
//     return method2;
//   } else {
//     return method2.length < method1.length ? method2 : method1;
//   }
// }
// console.log(getBestCombination(121));
// export function dominoReaction(sequence: string): string {
//   const STANDING = '|';
//   const KNOCKED = '/';
//   const EMPTY = ' ';
//   const result = sequence.split('');
//   if(sequence.startsWith(KNOCKED) || sequence.startsWith(EMPTY)) {
//     return sequence;
//   }
//   for(let i = 0; i < sequence.length; i++) {
//     if(sequence[i] === STANDING) {
//       result[i] = KNOCKED;
//       if(sequence[i+1] !== STANDING) {
//         return result.join('');
//       }
//     }
//   }
//   return result.join('');
// }
// console.log(dominoReaction("||| ||||//| |/"));
// export const isPangram = (phrase: string): boolean => {
//   const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
//   const onlyLetters = phrase.replace(/[^a-zA-Z]/g, '').toLowerCase();
//   let result: boolean = true;
//   alphabet.split('').forEach(letter => {
//     if(!onlyLetters.includes(letter)) {
//       result = false;
//     }
//   });
//   return result;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// export const pigIt = (a: string) : string =>  {
//   const wordsArray = a.split(' ').map(word => {
//     const charArray = word.split('');
//     if(charArray.length === 0) return;
//     const pattern = /[a-zA-Z]/;
//     if(pattern.test(charArray[0])) {
//       const first = charArray.shift();
//       charArray.push(`${first}ay`);
//     }
//     return charArray.join('');
//   });
//   return wordsArray.join(' ');
// }
// console.log(pigIt('Hello ! world ! '));
// export function firstNonConsecutive (arr: number[]) : null | number {
//   let result = null;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i+1] - arr[i] !== 1) {
//       result = arr[i+1];
//       break;
//     }
//   }
//   return result;
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// export function wave(str: string): Array<string> {
//   const result: string[] = [];
//   for(let i = 0; i < str.length; i++) {
//     const newWord = str.split('');
//     if(newWord[i] === ' ') continue;
//     newWord[i] = newWord[i].toUpperCase();
//     result.push(newWord.join(''));
//   }
//   return result;
// }
// console.log(wave('two words'));
// export function countSmileys(arr: string[]): number {
//   const pattern = /(\:|;)(-?|~?)(\)|D)/;
//   let result = 0;
//   arr.map(el => {
//     if(pattern.test(el)) result++;
//   });
//   return result;
// }
// console.log(countSmileys([':)',':(',':D',':O',':;']));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
// export function get_age(age: string): number {
//   return +age.split(' ')[0];
// }
// console.log(get_age("2 years old"));
// export const productFib = (prod: number): [number, number, boolean] => {
//   const fibArr: number[] = [0, 1];
//   for(let i = 2; i < prod; i++) {
//     const nextEl = fibArr[i-2] + fibArr[i-1];
//     if(nextEl > prod) break;
//     fibArr.push(nextEl);
//   }
//   let isMatch: boolean = false;
//   let first: number;
//   let second: number;
//   for(let i = 0; i < fibArr.length; i++) {
//     if(fibArr[i] * fibArr[i+1] === prod) {
//       first = fibArr[i];
//       second = fibArr[i+1];
//       isMatch = true;
//       break;
//     }
//     if(fibArr[i] * fibArr[i+1] > prod) {
//       first = fibArr[i];
//       second = fibArr[i+1];
//       isMatch = false;
//       break;
//     }
//   }
//   return [first, second, isMatch];
// }
// console.log(productFib(447577));
// export function isIsogram(str: string): boolean{
//   const lowerCaseStr = str.toLowerCase();
//   const charArray = lowerCaseStr.split('');
//   return charArray.every((char, index) => charArray.indexOf(char) === index);
// }
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('isIsogram'));
// export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
//   const difference = dadYearsOld - sonYearsOld;
//   const finalAge = difference*2;
//   return Math.abs(dadYearsOld - finalAge);
//  }
//  console.log(twiceAsOld(36,7));
// export function invert(array: number[]): number[] {
//   return array.map(el => -el);
// }
// console.log(invert([1,-2,3,-4,5]));
// export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
//   percent = percent / 100;
//   let previousYear = p0;
//   let endOfYear = 0;
//   let counter = 0;
//   while(previousYear < p) {
//     counter++;
//     endOfYear = Math.floor(previousYear + previousYear*percent + aug);
//     previousYear = endOfYear;
//   }
//   return counter;
// }
// console.log(nbYear(1500000, 0.25, -1000, 2000000));
// export function dirReduc(arr: string[]): string[] {
//   const result: string[] = [...arr];
//   let isFinished = false;
//   let duplicateFound: boolean;
//   while(!isFinished) {
//     duplicateFound = false;
//     for(let i = 0; i < result.length; i++) {
//       if((result[i] === 'NORTH' && result[i+1] === 'SOUTH') || (result[i] === 'SOUTH' && result[i+1] === 'NORTH')) {
//         result.splice(i, 2);
//         duplicateFound = true;
//         break;
//       }
//       if((result[i] === 'WEST' && result[i+1] === 'EAST') || (result[i] === 'EAST' && result[i+1] === 'WEST')) {
//         result.splice(i, 2);
//         duplicateFound = true;
//         break;
//       }
//     }
//     isFinished = !duplicateFound;
//   }
//   return result;
// }
// console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]));
// export function descendingOrder(n: number): number {
//   return +n.toString().split('').map(Number).sort().reverse().join('');
// }
// console.log(descendingOrder(145263));
// export function areYouPlayingBanjo(name: string): string {
//   return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Adam'));
// console.log(areYouPlayingBanjo('Ringo'));
// export function squareSum(numbers: number[]): number {
//   return numbers.map(el => el**2).reduce((a, b) => a + b, 0);
// }
// console.log(squareSum([0,3,4,5]));
// export const towerBuilder = (nFloors: number): string[] => {
//   let currentFloor = '';
//   const STAR = '*';
//   const SPACE = ' ';
//   let numOfStars = nFloors * 2 - 1;
//   let maxStars = numOfStars;
//   let numOfSpaces = 0;
//   const result: string[] = [];
//   for(let i = 0; i < nFloors; i++) {
//     currentFloor = `${SPACE.repeat(numOfSpaces)}${STAR.repeat(numOfStars)}${SPACE.repeat(numOfSpaces)}`;
//     numOfStars -= 2;
//     numOfSpaces = Math.floor((maxStars - numOfStars) / 2);
//     result.push(currentFloor);
//   }
//   return result.reverse();
// }
// console.log(towerBuilder(5));
// export function cockroachSpeed(s: number): number {
//   return Math.floor(s * 100 * 1000 / 3600);
// }
// console.log(cockroachSpeed(1.08));
// export class Kata {
//   static getCount(str: string): number {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];    
//     return str.split('').map(letter => vowels.includes(letter)).filter(Boolean).length;
//   }
// }
// console.log(Kata.getCount('abracadabra'));
// export function number(array: string[]): string[] {
//   const result: string[] = [];
//   for(let i = 0; i < array.length; i++) {
//     result.push(`${i+1}: ${array[i]}`);
//   }
//   return result;
// }
// console.log(number(['a', 'b', 'c']));
// export class Kata {
//   static validatePin(pin: string): boolean {
//     return pin.match(/^\d{4}(\d{2})?$/) !== null;
//   }
// }
// console.log(Kata.validatePin('123'))
// console.log(Kata.validatePin('123a'))
// console.log(Kata.validatePin('1234'))
// export const hasSurvived = (attackers : number[], defenders : number[]) : boolean => {
//   let attackersSurvived: number = 0;
//   let defendersSurvived: number = 0;
//   if(attackers.length > defenders.length) {
//     attackersSurvived += attackers.length - defenders.length;
//   }
//   if(defenders.length > attackers.length) {
//     defendersSurvived += defenders.length - attackers.length;
//   }
//   for(let i = 0; i < defenders.length; i++) {    
//     if(attackers[i] === undefined || defenders[i] === undefined) continue;
//     if(attackers[i] > defenders[i]) {
//       attackersSurvived++;
//     } 
//     if(defenders[i] > attackers[i]) {
//       defendersSurvived++;
//     }
//   }
//   if(defendersSurvived === attackersSurvived) {
//     if(attackers.length === 0 || defenders.length === 0) return true;
//     return defenders.reduce((a, b) => a + b, 1) >= attackers.reduce((a, b) => a + b, 1);
//   }
//   return defendersSurvived > attackersSurvived;
// }
// console.log(hasSurvived([1],[1]));
// export function findMissingLetter(array: string[]): string {
//   let missingLetter: string = '';
//   for(let i = 0; i < array.length - 1; i++) {
//     if(array[i+1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
//       missingLetter = String.fromCharCode(array[i].charCodeAt(0) + 1);
//     }
//   }
//   return missingLetter;
// }
// console.log(findMissingLetter(['O','Q','R','S']));
// export function solution(str: string, ending: string): boolean {
//   return ending === str.slice(str.length - ending.length);
// }
// console.log(solution('abcde', 'cde'));
// console.log(solution('abc', ''));
// export class Kata {
//   static highAndLow(numbers: string): string {
//     const arrNum = numbers.split(' ').map(Number);
//     return `${Math.max(...arrNum)} ${Math.min(...arrNum)}`
//   }
// }
// console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// export function findShort(s: string): number {
//   return Math.min(...s.split(' ').map(el => el.length));
// }
// console.log(findShort('lets talk about javascript the best language'));
// export function seriesSum(n: number): string {
//   if(n === 0) {
//     return '0.00';
//   }
//   const CONSTANT = 3;
//   let param = 4;
//   let result: number = 1;
//   for(let i = 0; i < n - 1; i++) {
//     result += 1 / param;
//     param += CONSTANT;
//   }
//   return result.toFixed(2);
// }
// console.log(seriesSum(1));
// export const likes = (a: string[]) : string => {
//   switch(a.length) {
//     case 0:
//       return 'no one likes this';
//     case 1:
//       return `${a[0]} likes this`;
//     case 2:
//       return `${a[0]} and ${a[1]} like this`;
//     case 3:
//       return `${a[0]}, ${a[1]} and ${a[2]} like this`;
//     default:
//       return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
//   }
// }
// export const digitalRoot = (n: number): number => {
//   let isOneDigit: boolean = false;
//   let currentNumber = n;
//   while(!isOneDigit) {
//     if(currentNumber >= 10) {
//       const currentArray = Array.from(currentNumber.toString()).map(el => +el);
//       currentNumber = currentArray.reduce((a, b) => a + b);
//     } else {
//       isOneDigit = true;
//     }
//   }
//   return currentNumber;
// };
// console.log(digitalRoot(456));
// export function printArray(array: Number[]) {
//   return array.map(el => el.toString()).join(',');
// }
// console.log(printArray([2,4,5,2]));
// export function doubleChar(str: string): string {
//   return str.split('').map(el => el + el).join('');
// }
// console.log(doubleChar('Adidas'));
// export function duplicateEncode(word: string) {
//   const arr = word.split('');
//   const result = arr.map(letter => {
//     const isDuplicate = arr.filter(el => el.toLowerCase() === letter.toLowerCase()).length > 1;
//     return isDuplicate ? ')' : '(';
//   });
//   return result.join('');
// }
// console.log(duplicateEncode('Success'));
// export class Cuboid {
//   constructor(public length: number, public width: number, public height: number) {}
//   get surfaceArea() {
//     return (2 * this.length * this.width) + (2 * this.width * this.height) + (2 * this.height * this.length);
//   }
//   get volume() {
//     return this.width * this.height * this.length;
//   }
// }
// export class Cube extends Cuboid {
//   constructor(public length: number) {
//     super(length, length, length);
//   }
// }
// const cuboid = new Cuboid(1, 2, 3);
// console.log(cuboid.volume)
// console.log(cuboid.surfaceArea)
// console.log(new Cube(5).surfaceArea)
// export const digitize = (n: number): number[] => {
//   return n.toString().split('').reverse().map(el => +el);
// };
// console.log(digitize(35231));
// export function gooseFilter (birds: string[]): string[] {
//   const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(bird => !geese.includes(bird));
// }
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// export function mango(quantity: number, price: number): number{
//   const numOfFree = Math.floor(quantity / 3);
//   const totalCost = (quantity - numOfFree) * price;
//   return totalCost;
// }
// console.log(mango(5, 3));
// function removeNb(n: number): [number, number][] {
//   const sum = (n * (n + 1)) / 2; // sum of all numbers from 1 to n
//   const result: [number, number][] = [];
//   for (let a = 1; a <= n; a++) {
//     const b = (sum - a) / (a + 1);
//     if (b % 1 === 0 && b <= n) {
//       result.push([a, b]);
//     }
//   }
//   return result;
// }
// console.log(removeNb(110));
// export function narcissistic(value: number): boolean {
//   const valueString = value.toString();
//   const numOfDigits = value.toString().length;
//   const powerArray: Array<number> = [];
//   valueString.split('').forEach(digit => {
//     const power = (+digit) ** numOfDigits;
//     powerArray.push(power);
//   });
//   const result = powerArray.reduce((a, b) => a + b);
//   return result === value;
// }
// console.log(narcissistic(7));
// export function removeChar(str: string): string {
//   return str.slice(1, str.length - 1)
// }
// console.log(removeChar("eloquent"))
// export function longestConsec(strarr: string[], k: number): string {
//   if(strarr.length === 0 || strarr.length < k || k <= 0) {
//     return '';
//   }
//   let newArray: string[] = [];
//   for(let i = 0; i <= strarr.length - k; i++) {
//     let newWord: string = '';
//     for(let j = 0; j < k; j++) {
//       newWord = newWord.concat(strarr[i+j])
//     }
//     newArray.push(newWord);
//   }
//   newArray = newArray.sort((a, b) => b.split('').length - a.split('').length);
//   return newArray[0];
// }
// console.log(longestConsec(["itfdfdfdfdgfdgfdgfdgdf","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));
// export const centuryFromYear = (year: number): number => {
//   return Math.ceil(year / 100);
// };
// console.log(centuryFromYear(1905));
// export function findUniq(arr: number[]): number {
//   let isUnique: boolean;
//   let newArray = [];
//   for(let i = 0; i < arr.length; i++) {
//     isUnique = arr[i] !== arr[i + 1];
//     if(isUnique) {
//       if(i === 0) {
//         newArray.push(arr[i]);
//         newArray.push(arr[i]);
//         if(arr[i] === arr[i+2]) {
//           return arr[1];          
//         } else {
//           return arr[0];
//         }
//       }
//       newArray.push(arr[i])
//     }
//   }
//   return newArray[1];
// }
// console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]));
// export function order(words: string): string {
//   if(words === '') {
//     return '';
//   }
//   const wordsArray = words.split(' ');
//   let objArray: {
//     word: string;
//     index: number;
//   }[] = [];
//   wordsArray.forEach(word => {
//     word.split('').forEach(letter => {
//       if(letter.match(/[1-9]/)) {
//         objArray.push({word: word, index: +letter});
//       }
//     });
//   });
//   const sortedArray = objArray.sort((a, b) => a.index - b.index);
//   return sortedArray.map(el => el.word).join(' ');
// }
// console.log(order("is2 Thi1s T4est 3a"));
// export function isDivisible(n:number, x:number, y:number): boolean {
//   return n % x === 0 && n % y === 0;
// }
// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
// }
// interface String {      // Declaration needed, don't remove it
//   toJadenCase(): string;
// }
// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
// export function unique(arr: any[], keys: string[]) {
//   let uniqueObject = {};
// }
// const objs = [
//   { x: 1, y: 1 },
//   { x: 2, y: 2 },
//   { x: 1, z: 1 },
//   { x: 1, y: 1, z: 3 },
// ];
// const keys = [ 'x', 'y' ];
// console.log(unique(objs, keys));
// interface Character {
//   nickname: string;
//   class: Class;
//   specialization: ClassSpecialization;
// }
// enum Class {
//   Mage,
//   Warlock,
//   Priest,
//   Rogue,
//   Monk,
//   Dh,
//   Druid,
//   Shaman,
//   Hunter,
//   Warrior,
//   Paladin,
//   Dk,
// }
// enum ClassSpecialization {
//   Fire,
//   FrostMage,
//   Arcane,
//   Destruction,
//   Affliction,
//   Demonology,
//   HolyPriest,
//   Discipline,
//   Shadow,
//   Assasin,
//   Subtely,
//   Outlaw,
//   Mistweaver,
//   Windwalker,
//   Brewmaster,
//   Havoc,
//   Vengeance,
//   Feral,
//   Guardian,
//   Balance,
//   RestoDruid,
//   Elemental,
//   Enh,
//   RestoShaman,
//   Marksman,
//   Survival,
//   BeastMaster,
//   Arms,
//   Fury,
//   ProtectionWarrior,
//   HolyPaladin,
//   ProtectionPaladin,
//   Retribution,
//   FrostDk,
//   Unholy,
//   Blood,
// }
// export class WowServer {
//     allPlayers: Character[] = [];
//     add(nickname: string, characterClass: Class, spec: ClassSpecialization): void {
//       this.allPlayers.push({
//         nickname: nickname,
//         class: characterClass,
//         specialization: spec
//       });
//     }
//     addMany(characters: Character[]): void {
//       characters.forEach(character => {
//         this.allPlayers.push(character);
//       });
//     }
//     count(nickname?: string, charClass?: Class, spec?: ClassSpecialization): number {
//         return this.allPlayers.filter(el => el.nickname === nickname || el.class === charClass || el.specialization === spec).length;
//     }
//     exists(nickname?: string, charClass?: Class, spec?: ClassSpecialization): boolean {
//         return this.allPlayers.filter(el => el.nickname === nickname || el.class === charClass || el.specialization === spec).length > 0;
//     }
//     find(nickname?: string, charClass?: Class, spec?: ClassSpecialization): Character[] {
//         return this.allPlayers.filter(el => el.nickname === nickname || el.class === charClass || el.specialization === spec);
//     }
//     getAll(): Character[] {
//         return this.allPlayers;
//     }
//     remove(nickname?: string, charClass?: Class, spec?: ClassSpecialization, count?: number): void {
//       for(let i = 0; i < count; i++) {
//       }
//     }
//     removeFirst(nickname?: string, charClass?: Class, spec?: ClassSpecialization): void {
//       this.find(nickname, charClass, spec).shift();
//     }
// }
// const expectedArray: Character[] = [
//   { nickname: "Warlock 1", class: Class.Warlock, specialization: ClassSpecialization.Destruction },
//   { nickname: `Warrior 1`, class: Class.Warrior, specialization: ClassSpecialization.Arms },
//   { nickname: `Warrior 2`, class: Class.Warrior, specialization: ClassSpecialization.Fury },
//   { nickname: `Troll 123`, class: Class.Mage, specialization: ClassSpecialization.Fire },
//   { nickname: `Troll 123`, class: Class.Mage, specialization: ClassSpecialization.FrostMage },
// ];
// const server = new WowServer();
// const nickname = "First player";
// const playerClass = Class.Warlock;
// const playerSpec = ClassSpecialization.Destruction;
// server.addMany(expectedArray);
// console.log(server.exists("Troll 123"))
// console.log(server.exists("Troll 12"))
// export abstract class Animal {
//   /** @param {number} value The length of the animal in parrots. */
//   protected constructor(public value: number) {}
//   convertTo(someone: Animal): number {
//     return someone.value / this.value;
//   }
// }
// export class Boa extends Animal {
//   constructor() {
//     super(1);
//   }
// }
// export class Parrot extends Animal {
//   constructor() {
//     super(38);
//   }
// }
// export class Monkey extends Animal {
//   constructor() {
//     super(5);
//   }
// }
// const boa = new Boa();
// const monkey = new Monkey();
// console.log(boa.convertTo(monkey));
// export const otherAngle = (a: number, b: number): number => {
//   return 180 - a - b;
// }
// export const reverseSeq = (n: number): number[] => {
//   const arr: number[] = [];
//   for(let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr.reverse();
// };
// console.log(reverseSeq(5));
// export const min = (list: number[]): number => {
//   return Math.min(...list);
// };
// export const max = (list: number[]): number => {
//   return Math.max(...list);
// };
// export function move(pos: number, roll: number): number {
//   return pos + roll*2;
// }
// export function even_or_odd(n:number):string {
//   return n % 2 === 0 ? 'Even' : 'Odd';
// }
// export const longest = (s1: string, s2: string): string => {
//   // return [...new Set([...new Set(s1), ...new Set(s2)])].sort().toString().replace(/,/g, '');
//   return [...new Set([...s1, ...s2])].sort().join('');
// }
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
// export function multiples(number: number) {
//   const numArr: number[] = [];
//   const newArr: number[] = [];
//   for(let i = 1; i < number; i++) {
//     numArr.push(i);
//   }
//   numArr.forEach(el => {
//     if(el % 3 === 0 || el % 5 === 0) {
//       newArr.push(el);
//     }
//   });
//   const set = [...new Set(newArr)];
//   return set.reduce((acc, sum) => acc + sum, 0);
// }
// console.log(multiples(10));
// export function accum(s: string): string {
//   return s.split('').map((el, i) => {
//     return el.toUpperCase() + el.toLowerCase().repeat(i);
//   }).toString().replace(/,/g,'-');
// }
// console.log(accum("ZpglnRxqenU"));
// export function isTriangle(a: number, b: number, c: number): boolean {
//   return (a + b > c) && (a + c > b) && (b + c > a);
// }
// export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
//   return classPoints.reduce((acc, sum) => acc + sum) / classPoints.length > yourPoints;
// }
// function josephusSurvivor(n: number, k: number): number {
//   let survivor = 0;
//   for (let i = 1; i <= n; i++) {
//     survivor = (survivor + k) % i;
//   }
//   return survivor + 1;
// }
// console.log(josephusSurvivor(11, 19));
// export const movingShift = (s: string, shift: number) => {
//   const arrOfWords = s.split(' ');
//   let currShift = shift;
//   const charCodesArr = arrOfWords.map(word => {
//     if(currShift !== shift) currShift++;
//     return word.split('').map(char => {
//       const currCharCode = char.charCodeAt(0);
//       if((currCharCode < 65 || currCharCode > 90) && (currCharCode < 97 || currCharCode > 122)) return currCharCode;
//       const modifiedCharCode = currCharCode + currShift;
//       currShift++;
//       return modifiedCharCode;
//     });  
//   });
//   // console.log(charCodesArr)
//   const result = charCodesArr.map((word) => {
//     return word.map(char => String.fromCharCode(char));
//   });
//   console.log(result)
//   // const bbb = arrOfWords.map(num => {
//   //   if(num === SPACE_ASCII + shift) return ' ';
//   //   return String.fromCharCode(num);
//   // });
//   // console.log(arrOfWords);
//   // console.log(bbb.join(''));
//   // return []
// }
// export const demovingShift = (arr:string[], shift:number) => {
//   return ""
// }
// const u = "I should have known that you would have a perfect answer for me!!!";
// console.log(movingShift(u, 1));
// export class Vector {
//   components: number[];
//   constructor(components: number[]) {
//     this.components = components;
//   }
//   add(vector: Vector) {
//     this.isLengthEqual(vector.components.length);
//     return new Vector(this.components.map((num, index) => num + vector.components[index]));
//   }
//   subtract(vector: Vector) {
//     this.isLengthEqual(vector.components.length);
//     return new Vector(this.components.map((num, index) => num - vector.components[index]));
//   }
//   dot(vector: Vector) {
//     this.isLengthEqual(vector.components.length);
//     return this.components.map((num, index) => num * vector.components[index]).reduce((a, b) => a + b);
//   }
//   norm() {
//     const sumOfSquares = this.components.map(num => num ** 2).reduce((a, b) => a + b);    
//     return Math.sqrt(sumOfSquares);
//   }
//   toString() {
//     return `(${this.components.join(',')})`;
//   }
//   equals(vector: Vector) {
//     return this.components.every((el, i) => el === vector.components[i]);
//   }
//   private isLengthEqual(length: number) {
//     if(length !== this.components.length) {
//       throw Error('Lengths are not equal');
//     }
//   }
// };
// const a = new Vector([1, 2, 3]);
// const b = new Vector([3, 4, 5]);
// const c = new Vector([5, 6, 7, 8]);
// console.log(a.add(b))
// console.log(a.subtract(b));
// console.log(a.dot(b));
// console.log(a.norm());
// console.log(a.toString());
// console.log(a.equals(b));
// a.add(c);
// export function orderWeight(string: string): string {
//   const arrOfWeights: {
//     [key: string]: number
//   }[] = [];
//   let result: string = '';
//   string.split(' ').forEach((num) => {
//     const currentArrMemberSum = +num.split('').reduce((a, b) => `${+a + +b}`, '');
//     arrOfWeights.push({ [num]: currentArrMemberSum });
//   });
//   arrOfWeights.sort((a, b) => {
//     if(Object.values(a)[0] === Object.values(b)[0]) {
//       return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
//     } else {
//       return Object.values(a)[0] - Object.values(b)[0];
//     }
//   });
//   arrOfWeights.forEach((num) => {
//     result += ' ';
//     result += Object.keys(num)[0]
//   });
//   return result.trim();
// }
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// export function solve(s: string) {
//   const excluded = ['a', 'e', 'i', 'o', 'u'];
//   const aPositionAscii = 96;
//   const charArr = s.split('');
//   let newArr: string[] = [];
//   for(let i = 0; i < charArr.length; i++) {
//     if(!excluded.includes(charArr[i])) {
//     }
//   }
//   const consonants = s.split('').filter(letter => !excluded.includes(letter));
//   const result: number[] = [];
//   consonants.forEach(char => {
//     const currentCharScore = char.charCodeAt(0) - aPositionAscii;
//     result.push(currentCharScore);
//   });
//   return result.reduce((a, b) => a + b);
// }
// console.log(solve('catchphrase'));
// export function persistence(num: number, counter: number = 1): number {
//   const digits = num.toFixed(0).split('');
//   if(digits.length === 1) return 0;
//   const arrofNum = digits.map(el => +el);
//   const result = arrofNum.reduce((prev, curr) => prev * curr, 1)
//   if(result.toFixed(0).split('').length !== 1) {
//     counter++;
//     return persistence(result, counter);
//   }
//   return counter;
// }
// console.log(persistence(39));
/**
 * Calculates the nth tribonacci sequence given the initial values and the number of elements to generate.
 *
 * @param {[number, number, number]} [a, b, c] - The initial values of the tribonacci sequence.
 * @param {number} n - The number of elements to generate in the tribonacci sequence.
 * @return {number[]} The resulting tribonacci sequence.
 */
// export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
//   if(n === 0) return [];
//   if(n === 1) return [a];
//   if(n === 2) return [a, b];
//   const input = [a, b, c];
//   let result: number[] = [... input];
//   let tempArray: number[] = [... input];
//   for(let i = 0; i < n - 3; i++) {
//     if(i > 0) tempArray.shift();
//     const currentValue = tempArray.reduce((prev, curr) => prev + curr);
//     tempArray.push(currentValue);
//     result.push(currentValue);
//   }
//   return result;
// }
// console.log(tribonacci([300, 200, 100], 0));
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
