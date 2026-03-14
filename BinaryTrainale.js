const ROWS = 6;

function printBinaryTriangle(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        result += "1 ";
      } else {
        result += "0 ";
      }
    }
    result += "\n";
  }

  process.stdout.write(result);
}

printBinaryTriangle(ROWS);
