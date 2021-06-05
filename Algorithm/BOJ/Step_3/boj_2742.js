let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = max; i > 0; i--) {
    answer += i + '\n';
}

console.log(answer);