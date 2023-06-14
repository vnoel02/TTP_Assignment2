let numbers = [1, 2, 3, 4, 5];

//foreach()

function myEach(arr, callback) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

let test = myEach(numbers, (ele) => {return ele;});

console.log(test);


//map()
console.log("----------------------------------------")

function myMap(arr, callback) {
   //New array
   let newArr = [];
   for(let i=0; i<arr.length; i++) {
       newArr.push(callback(arr[i]));
   }
   return newArr;
}


let modArr = myMap(numbers, (ele) => {return ele*2;});

console.log(modArr);


console.log("------------------------------------")

// filter()
function myFilter(arr, callback) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let evenNumbers = myFilter(numbers, (num) => {return num%2 === 0});
console.log(evenNumbers);

console.log("------------------------------------")

//some()

function some(arr, callback) {
   for (let i=0; i<arr.length; i++) {
      if (callback(arr[i])) {
          return true;
      }
   }
  return false;
}

let someNum = some(numbers, (num) => {return num%2 === 0})
console.log(someNum);
console.log("------------------------------------")


// every()
function myEvery(arr, callBack) {
    for (let i=0; i<arr.length; i++) {
       if(!callBack(arr[i])) {
          return false;
       }
    }
    return true;
}
let isAllEven = myEvery(numbers, (num) => {return num%2 === 0});
console.log(isAllEven);

console.log("------------------------------------")

//reduce() 
function myReduce(arr, callback, initialVal) {
    let accumulator = 0;
    for (let i=0; i<arr.length; i++) {
      accumulator += callback(initialVal, arr[i]);
    }
    return accumulator;
}

let result = myReduce(numbers, (x,y) => x+y,0);

console.log(result);

console.log("------------------------------------")

//includes()

function myIncludes(arr, element) {
    for(let i=0; i<arr.length;i++) {
        if(arr[i] === element)
            return true;
    }
    return false;
}

console.log(myIncludes(numbers, 5));

console.log("------------------------------------")

// indexOf()

function myIndexOf(arr, element) {
    for(let i=0; i<arr.length; i++) {
       if(arr[i] === element) {
          return i;
       }
    }
    return -1;
}

console.log(myIndexOf(numbers, 5));

console.log("------------------------------------")

// push()
function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
    return arr.length;
}
myPush(numbers,6);
console.log(numbers);

console.log("------------------------------------")

// lastIndexOf()
function myUnshift(arr, element) {
    for(let i=arr.length-1; i>=0; i--) {
        if (arr[i] === element) {
          return i;
        }
    }
    return -1;
}

console.log(myUnshift(numbers, 5));

console.log("------------------------------------")

// Object.keys() 
Object.getKeys = function(ele) {
   let newkeys = [];
   for (let key in ele) {
      newkeys.push(key);
   }
   return newkeys;
}

const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

const keys = Object.getKeys(student);
console.log(keys);

console.log("------------------------------------")

//Object.values()
Object.getValues = function(ele) {
    let values = [];
    for (let val in ele) {
        values.push(val);
    }
    return values;
}

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

const values = Object.getValues(car);
console.log(values); // ["Toyota", "Corolla", 2020]

console.log("------------------------------------")

// (1)
function range() {
    let arr = [];
    for(let i = start; i<end; i++) {
       arr.push(i)
    }
    return arr;
}

function sum(arr) {
   let sum = 0;
   for (let i=0; i<arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}


// (2)

function reverse(array) {
    let reversedArr = [];
    for (let i=arr.length-1; i>=0; i++) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

function reverseArrayInPlace(arr) {
    let temp;
    for (let i=0; i<Math.floor(arr.length/2); i++) {
       temp = arr[i];
       arr[i] = arr[arr.length - 1 - i];
       arr[arr.length - 1 - i] = temp;
    }
    return arr;
}


console.log(reverseArrayInPlace(numbers));

// (3)



// (4)

// function deepEqual(x, y) {
//     if (x === y) {
//       return true;
//     } else if (typeof x === 'object' && x != null && typeof y === 'object' && y != null)

// }

// (5)
function moveZeros (nums) {
  for (let i=0; i<nums.length; i++) {
      if (nums[i] === 0) {
        for (let j = i; j<nums.length-1; j++) {
            let temp = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = temp;
        }
      }
        
  }
  return nums;
}


let arr = [0,1,0,3,12];
console.log(moveZeros(arr));