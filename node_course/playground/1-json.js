const fs = require('fs');

const book = {
    title: "Ego is an Enemy",
    author: "Ryan Holiday"
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parsedData = JSON.parse(bookJson);
console.log(parsedData);
console.log(parsedData.title);
console.log(parsedData.author);

const data = {
    name: "Swachil Patel",
    age: "29",
    city: "Bharuch"
};

fs.writeFileSync('data.json', JSON.stringify(data));

const dataJson = fs.readFileSync('data.json').toString();
const readData = JSON.parse(dataJson);
console.log(readData);
readData.name = "Hinal Patel";
readData.age = "28";
readData.city = "Dantrai";
console.log(readData);
fs.writeFileSync('data.json', JSON.stringify(readData));