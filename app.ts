function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2);
  }
  const add = (a: number, b: number) => {
    console.log(a + b); 
  }
  executeCallback(add, 10, 5); 
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers: number[] = numbers.filter((number) => number > 3);
console.log(filteredNumbers); 
function fetchData(
    callback: (error: Error | null, data?: string) => void
  ): void {
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    if (Math.random() > 0.5) {
      callback(null, data); 
    } else {
      callback(error); 
    }
  }
  fetchData((error, data) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log(data); 
    }
  });
