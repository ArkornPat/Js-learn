let a = [9,10,1,2,3]

let b = a.reduce((acc, cur)=>{
    if(cur % 2 === 0) {
        acc.push(cur);
    } else {
        acc.push(cur + 1);
    }
    return acc;
},[]).filter((num, index, self) => self.indexOf(num) === index).sort((a,b)=> a-b)

// let b = a.map(ans => ans%2 ===0 ? ans : ans+1)

console.log(b)