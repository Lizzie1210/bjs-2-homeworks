function getArrayParams(...arr) {
 let min = Infinity;
 let max = -Infinity;
 let sum = 0;

 if (arr.length === 0) {
  return 0;
}

let i = 0;

 for (i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
     max = arr [i];
   } 
   if (arr[i] < min) {
     min = arr [i];
   }
   sum += arr[i];
 }

 let avg = sum / arr.length;
 avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let sum = 0;

if (arr.length === 0) {
	return 0;
}

for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
let min = Infinity;
let max = -Infinity;

if (arr.length === 0) {
	return 0;
}

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	} else if (arr[i] < min) {
		min = arr[i];
	}
}

let difference = max - min;
return difference;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;

if (arr.length === 0) {
	return 0;
}

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		sumEvenElement += arr[i];
	} else {
		sumOddElement += arr[i];
	}
}

let difference = sumEvenElement - sumOddElement;
return difference;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;

if (arr.length === 0) {
	return 0;
}

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		sumEvenElement += arr[i];
		countEvenElement += 1;
	}
}

if (countEvenElement === 0) {
		return 0;
	}
  
let result = sumEvenElement / countEvenElement;
return result;
}

function makeWork (arrOfArr, func) {
if (arrOfArr.length === 0) {
	return 0;
}
let maxWorkerResult = func(...arrOfArr[0]);

for (let i = 1; i < arrOfArr.length; i++) {
	const currentResult = func(...arrOfArr[i]);

	if (currentResult > maxWorkerResult) {
		maxWorkerResult = currentResult;
	}
}
return maxWorkerResult;
}
