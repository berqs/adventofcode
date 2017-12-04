//// PART 1 ////

// Resolution 1
const rows = document.body.innerText.split('\n').map(e => e.split('\t'));
function checkSum(rows) {
  return rows
    .map(x => Math.max.apply(Math, x) - Math.min.apply(Math, x))
    .reduce((a, b) => a + b)
}
console.log(checkSum(rows));

// Resolution 2
const rows = document.body.innerText.split('\n').map(e => e.split('\t'));
var allResults = 0;
rows.map(x => {
  let bigger = Math.max.apply(Math, x);
  let smaller = Math.min.apply(Math, x);
  let result = bigger - smaller;
  allResults += result;
});
console.log(allResults);


//// PART 2 ////


// Resolution 1
const rows = document.body.innerText.split('\n').map(e => e.split('\t').map(e => +e));

function checkSum2(rows) {
  allResults = 0;

  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      for (let j = 0; j < row.length; j++) {
        if (i === j) {
          continue;
        }

        if (row[i] % row[j] === 0) {
          checksum += row[i] / row[j];
        }
      }
    }
  }

  console.log(allResults);
}

