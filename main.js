let result = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result += `${i} x ${j} = ${i * j}\n`;
  }
  result += '------------------\n';
}

console.log(result);