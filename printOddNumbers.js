let inputNum = 10

function printOddNumbers(input){
    for(let i=0; i<=input; i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
}

console.log("Odd numbers between 1 to " + inputNum);
printOddNumbers(inputNum)
