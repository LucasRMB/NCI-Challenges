let table = [];

for(let i = 0; i < 12; i++) {

    let row = [];

    for(let j = 0; j < 12; j++) {
        row.push((i + 1) * (j + 1));
    }

    table.push(row);
}

for(let i = 0; i < table.length; i++) {

    let row = table[i];

    for(let j = 0; j < row.length; j++) {
        let value = row[j];
        process.stdout.write(value.toString());
        process.stdout.write('\t');
    }

    console.log();
}