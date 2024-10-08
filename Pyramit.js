let a = 10;
for (let i = 1; i <= a; i++) {
        console.log(`${"x".repeat(i)}`);
        console.log(`${" ".repeat(a-i)}${"x".repeat(i)}`);
        console.log(`${" ".repeat((a - i))}${"x".repeat(i * 2 - 1)}`);
        
        let pyramid = "";
        for (let j = 0; j < a - i; j++) {
            pyramid += ' ';
        }
        for (let j = 0; j < i ; j++) {
            pyramid += 'x';
        }
        console.log(pyramid);
}