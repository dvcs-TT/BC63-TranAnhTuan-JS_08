var numArray = [];
var arrayFloat = [];

// 0A. Get an element by ID
function getEle(id) {
  return document.querySelector(id);
}

// 0B. Add an item to the array
function addItem() {
  var n = Number(getEle("#inputNum").value);
  numArray.push(n);
  getEle("#txtArray").innerHTML = numArray;
  getEle("#inputNum").value = "";
}

// 01. Calculate the sum of the positive numbers in the array
function calcSumPosNos() {
  var sum = 0;
  for (var index = 0; index < numArray.length; index++) {
    const item = numArray[index];
    if (item > 0) {
      sum += item;
    }
  }
  getEle("#txtSum").innerHTML = `Tổng số dương: ${sum}`;
}

// 02. Count positive numbers in the array
function countPosNos() {
  var count = 0;
  for (var index = 0; index < numArray.length; index++) {
    const item = numArray[index];
    if (item > 0) {
      count++;
    }
    getEle("#txtCount").innerHTML = `Lượng số dương: ${count}`;
  }
}

// 03. Find the minimum number in the array
function findMin() {
  var min = numArray[0];
  for (var index = 1; index < numArray.length; index++) {
    const item = numArray[index];
    if (item < min) {
      min = item;
    }
    getEle("#txtMin").innerHTML = `Số nhỏ nhất: ${min}`;
  }
}

// 04. Find the minimum positive number in the array
function findMinPos() {
  var posArray = [];
  for (var index = 0; index < numArray.length; index++) {
    const item = numArray[index];
    if (item > 0) {
      posArray.push(item);
    }
  }

  if (posArray.length !== 0) {
    var minPos = posArray[0];
    for (var i = 0; index < posArray.length; i++) {
      const posItem = posArray[i];
      if (posItem < minPos) {
        minPos = posItem;
      }
    }
    getEle("#txtMinPos").innerHTML = `Số dương nhỏ nhất: ${minPos}`;
  } else {
    getEle("#txtMinPos").innerHTML = "Không có số dương trong mảng";
  }
}

// 05. Find the last even numbers in a given array
function findLastEvenNo() {
  var lastEvenNo = 0;
  for (let index = 0; index < numArray.length; index++) {
    const item = numArray[index];
    if (item % 2 == 0) {
      lastEvenNo = item;
    }
  }
  getEle("#txtEven").innerHTML = `Số chẵn cuối cùng: ${lastEvenNo}`;
}

// 06. Swap 2 numbers in a given array
function swap(iA, iB) {
  var numA = numArray[iA];
  var numB = numArray[iB];
  numArray[iA] = numB;
  numArray[iB] = numA;
}

function swapNdisplay() {
  var indexA = getEle("#inputIndexA").value;
  var indexB = getEle("#inputIndexB").value;
  swap(indexA, indexB);
  getEle("#txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray;
}

// 07. Sort all array items in ascending order
function sortAscending() {
  for (var iX = 0; iX < numArray.length; iX++) {
    for (var iY = 0; iY < numArray.length - 1; iY++) {
      if (numArray[iY] > numArray[iY + 1]) {
        swap(iY, iY + 1);
      }
    }
  }
  getEle("#txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
}

// 08. Find the first prime number in a given array
function isPrime(n) {
  // A number less than 2 cannot be prime
  if (n < 2) {
    return false;
  }

  // Check if n is divisible by any number from 2 to sqrt(n)
  for (var i1 = 2; i1 <= Math.sqrt(n); i1++) {
    if (n % i1 == 0) {
      return false;
    }
  }

  // If n is not divisible by any number from 2 to sqrt(n), it is prime
  return true;
}

function findPrime() {
  var primeNo = -1;
  for (var i2 = 0; i2 < numArray.length; i2++) {
    if (isPrime(numArray[i2])) {
      primeNo = numArray[i2];
      break;
    }
  }
  getEle("#txtPrime").innerHTML = primeNo;
}

// 09. Count integers in a given array
function getFloat() {
  var newFloat = Number(getEle("#inputFloat").value);
  arrayFloat.push(newFloat);
  getEle("#txtArrayFloat").innerHTML = arrayFloat;
}

function countIntegers() {
  var numIntegers = 0;

  for (var i = 0; i < arrayFloat.length; i++) {
    if (Number.isInteger(arrayFloat[i])) {
      numIntegers++;
    }
  }

  getEle("#txtInt").innerHTML = "Số lượng số nguyên có trong mảng: " + numIntegers;
}


// 10. Compare the count of the positive and negative numbers in a given array
function compareNum() {
  var countPositive = 0;
  var countNegative = 0;

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      countPositive++;
    } else if (numArray[i] < 0) {
      countNegative++;
    }
  }

  var comparisonResult =
    countPositive > countNegative
      ? "Số dương > Số âm"
      : countPositive < countNegative
      ? "Số âm > Số dương"
      : "Số âm = Số dương";

  getEle("#txtCompare").innerHTML = "Kết quả so sánh: " + comparisonResult;
}
