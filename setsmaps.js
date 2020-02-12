//SET INFO

//data storage that tells you if something is included or not
const ids = new Set(['Hi', 'Hello', 'Greetings']);
ids.add(2);
//delete() will delete if included, but if not included, it is ignored and no error thrown
ids.delete();

for (const entry of ids.entries()) {
    console.log(entry[0]);
}


//MAPS INFO

const person1 = {name: 'name1'};
const person2 = {name: 'name2'};
//good for getting info in ids/key values
const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
console.log(personData.get(person1));
personData.set(person2, [{date: '2 weeks ago', price: 100}]);

for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
}

//clear() clears all data from a Map
//delete() deletes a single entry 
//forEach() allows to go through items in a Map
//has() allows to check to see if a key is part of a Map
//set() allows you to set a value
//property of 'size' tells you how many items are in the Map
//=> such as personData.size

//Maps better for performance for large quantities of data; Objects are better for small to medium collections of data
//Maps take longer to create because of syntax but have better performance with adding/removing data frequently


//WEAK SETS and WEAK MAPS

let person = {name: 'name1'};
const persons = new WeakSet();
persons.add(person);
//if person is needed for an operation then not required anymore, you can set person = null which clears out that memory
//if use Set(), it will stay even if you don't need it anymore
//if use WeakSet(), garbage collection will delete items in it

const personData = new WeakMap();
personData.set(person, 'more info');
person = null;
//same as above: will garbage collect if use WeakMap()