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

//can select a part of an array with slice() too
const newResults = testResults.slice(0, 2);
//concat() similar to push() but combines arrays, push() would add array inside array
const moreResults = testResults.concat([3.99, 22]);
console.log(moreResults, newResults)