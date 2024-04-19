function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 10, 5);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter(function (number) { return number > 3; });
console.log(filteredNumbers);
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
