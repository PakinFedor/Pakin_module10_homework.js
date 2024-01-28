// задание 1
let x; 
x = +prompt ('Введите значение');
if (isNaN (x)) {
    console.log ('Упс, кажется, вы ошиблись');
  
} else {
  if (x % 2 === 0) {
    console.log ('Even');
  } else {
  console.log ('Odd');
}
}
 


// задание 2
let x;
x = 1;
if (typeof x === 'number') {
  console.log ('x — число')
} else if (typeof x === 'string') {
    console.log ('x — строка')
  } else if (typeof x === 'boolean') {
      console.log ('x — булев')
    } else {
      console.log ('Тип x не определён')
    }
 


// задание 3 
function reverseString(str) {
  return str.split("").reverse().join("");
}
const stringReverse = reverseString("hello");
console.log (stringReverse);



// задание 4
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
const result = random(0, 100);
console.log (result);



// задание 5 вариант 1
let nums = [5, 10, 15, 20, 25, 30];
for (let i = 0; i < nums.length; i++) {
  console.log (nums[i]);
}



// задание 5 вариант 2
let nums = [5, 10, 15, 20, 25, 30];
nums.forEach (function (item, index, array) { 
  console.log (`item:${item}, index:${index}`);
}
)



// задание 6
let array = [5, 10, 15, 20, 25, 30];
let bigNums = array.every (function (element, index, array) {
  return element >= 10;
})

console.log (bigNums);



// задание 7
let array = [0, 1, 2, 3, 4, '4', 5, null, 6, 7, 8, 8, '9', 10], zeroCount = 0, evenCount = 0, oddCount = 0, NanCount = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
  if (array[i] === 0) {
    zeroCount++;
  } else if (array[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
} else {
  NanCount++;
}
}

console.log (array.length);
console.log (`zeroCount: ${zeroCount}`);
console.log (`evenCount: ${evenCount}`);
console.log (`oddCount: ${oddCount}`);
console.log (`NanCount: ${NanCount}`);



// задание 8
let myMap = new Map();
myMap.set('city', 'SPb');
myMap.set('school', 'skillfactory');
myMap.set('group', 'FRPRO-35');
myMap.set('age', 38);
myMap.set('name', 'Fedor');
myMap.set('status', true);
myMap.set('progress', 'module-10');

for (let [key, value] of myMap) {
  console.log (`key: ${key}, value: ${value}`);
}

