//SET INFO

//data storage that tells you if something is included or not
const ids = new Set(['Hi', 'Hello', 'Greetings']);
ids.add(2);
//delete() will delete if included, but if not included, it is ignored and no error thrown
ids.delete();

for (const entry of ids.entries()) {
    console.log(entry[0]);
}
