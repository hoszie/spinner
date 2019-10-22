const stdOut = process.stdout;
let i = 0;
const counter = 100;

const arr = ["| ", "/ ", "- ", "\\  ", "\n"];
const arrLength = arr.length;

for (let item of arr) {
  setTimeout(() => {
    stdOut.write('\r' + item);
  }, counter + i )
  i += 200;
}