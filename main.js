let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

class Data {
  constructor(data) {
    this._data = data;
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
  }
  
  maxNumber(){
    return Math.max(...this._data);
  }

  reverseSort() {
    this._data.sort((a, b) => b - a);
  }
  static combine(obj1, obj2) {
    const merged = obj1.data.concat(obj2.data)
    return merged
  }
  static getPrimes(obj){
    const primes = obj.data.filter((num) => isPrime(num));
    return primes;
  }
}
let data = new Data(dataArr);
let data2 = new Data([1, 8, 3, 0, 2, 9, 8, 5])
console.log("Raw data:");
console.log(data._data);

console.log("Data form getter:");
console.log(data.data);

console.log("Max number:");
console.log(data.maxNumber());

console.log("Reverse sort:");
data.reverseSort();
console.log(data._data);

console.log("Combined:");
console.log(Data.combine(data, data2));

console.log("Primes:");
console.log(Data.getPrimes(data))