//ARRAYS

const numbers = [1, 2, 3];
console.log(numbers);

// If you pass a single number, JS interprets this as the length of array and not the array item
const moreNums = Array();
// can also use const moreNums = new Array(); but same as above applies
console.log(moreNums);

const andMoreNums = Array.of(1, 2);
console.log(andMoreNums);


const listItems = document.querySelectorAll('li');
console.log(listItems)
//allows conversion of an array-like object into an array
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const items = ['hobby1', 50, [1, 2, 3], true];
console.log(items[2]);

const analyticsData = [1, 1.61, [-5.4, 2.1]];
for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint)
    }
}


const titles = ['title1', 'title2'];
titles.push('title3');
titles.unshift('title4');
const poppedTitles = titles.pop();
const shiftedTitles = titles.shift();
console.log(titles);
//push and pop are faster for computers since only last item is changed
//following adds element
titles.splice(0, 0, 'Real Title 1');
//following removes an item
titles.splice(0, 1);
//following removes from this point forward
splicedTitles = titles.splice(0);


const testResults = [1, 3.4, 5, -7, 10, -9.7];
//slice() creates a new array
const storedResults = testResults.slice();
testResults.push(5.9);
console.log(testResults, storedResults);

//essentially a boolean if item is in an array, or -1 if false
console.log(testResults.includes(3.4));

//can select a part of an array with slice() too
const newResults = testResults.slice(0, 2);
//concat() similar to push() but combines arrays, push() would add array inside array
const moreResults = testResults.concat([3.99, 22]);
console.log(moreResults, newResults);
//looks for first item in an array, if multiple are present it stops at first instance
console.log(testResults.indexOf(5));
//looks for last instance of item
console.log(testResults.lastIndexOf(5));

const people = [{name: 'name1'}, {name: 'name2'}];
//console.log(person.indexOf({name: 'name2'}));
//this will result in -1 since it won't find anything but doesn't want to throw an error

//find() executes a function in the array for you, but takes 3 arguments
const name = people.find((person, idx, persons) => {
    return person.name === 'name2';
});
console.log(name2);

const namedPeople = people.find((person, idx, persons) => {
    return person.name === 'name2';
});
console.log(namedPeople);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustPrices = [];
// for(const price of prices) {
//     taxAdjustPrices.push(price * (1 + tax));
// }
prices.forEach((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    taxAdjustPrices.push(priceObj);
});
console.log(taxAdjustPrices);

//map() transforms arrays
const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    return priceObj;
});
console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if ( a === b) {
        return 0;
    } else {
        return -1;
    }
});
//reverse() will reverse the logic, but is usually better to just write a reversed logic in sort()
console.log(sortedPrices.reverse());

//determined by boolean: if true it will return, if false it will not
const filteredArray = prices.filter((price, idx, prices) => {
    return price > 6;
});
//below is same as above: filter() takes 3 arguments, but in arrow functions, we don't need the anonymous parts
//const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);

//reduce takes a function as its argument
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);

//indicate what to split the string by; creates array with the items split then
const thing = 'new york;10.99;2000';
const transformedThing = thing.split(';');

//join combines items in array into a string; defaults to have comma between but if a space is used there won't be
const nameFragments = ['name1', 'name2', 'name3'];
const names = nameFragments.join(' ');

//spread operator: can copy an array and if items are pushed to array, changes won't be taken into account
const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);
console.log(Math.min(...prices));

const people = [{ name: 'person name', age: 42 }, { name: 'person2 name', age: 21 }];
const copiedPeople = people.map(person => ({
    name: person.name,
    age: person.age
}));

//array destructuring
const nameData = ['first name', 'last name', 'Mr', 65];
//const firstName = nameData[0];
//const lastName = nameData[1];

//the ellipses in this case is a 'rest operator' because it collects the rest of the info
const [ firstName, lastName, ...otherInfo ] = nameData;
console.log(firstName, lastName, otherInfo);
