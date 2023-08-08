var displayValue = "";
var calcArray = [];
populate();
//clear();
operation();
getAnswer();
function operate(num1,num2,operator){
    if(operator == '+'){
        return (num1 + num2);
    }
    if(operator == '-'){
        return (num1 - num2);
    }
    if(operator == '*'){
        return (num1 * num2);
    }
    if(operator == '/'){
        return (num1 / num2);
    }
}

//creating eventlistener for all buttons
function populate(){// allow it to enter multiple numbers
    const displayBox = document.getElementById("display-box");
    const blocks = document.getElementsByClassName("key");

    for(let i = 0; i < blocks.length; i++){
        blocks[i].addEventListener("click", function(){
            displayValue += blocks[i].innerHTML;
            displayBox.innerText = displayValue;
        })
    }
}

function clear(){
    const clear = document.getElementById("clear");
    const displayBox = document.getElementById("display-box");
    
    console.log("here");
    displayBox.innerText = "";
    displayValue = ""

    clear.addEventListener("click",function(){
        calcArray = [];
        console.log("here");
        displayBox.innerText = "";
        displayValue = ""
    })

}

function operation(){
    const operations = document.getElementsByClassName("operation");
    for(let j =0; j < operations.length; j++){
        operations[j].addEventListener('click',function(){
            
            if(displayValue != "") calcArray.push(displayValue);
            calcArray.push(operations[j].innerHTML);
            clear();
            console.log(calcArray);
        })
    }
}

function getAnswer() {
    const equal = document.getElementById("equalBtn");
    const displayBox = document.getElementById("display-box");

    equal.addEventListener('click', function() {
        calcArray.push(displayValue);
        displayValue = "";
       // clear();

        let total = parseFloat(calcArray[0]); 

        for (let k = 1; k < (calcArray.length ); k += 2) {
            console.log("within calculation array");
            let operator = calcArray[k];
            let operand = parseFloat(calcArray[k + 1]) ;
            
            total = operate(total, operand, operator);
        }

        displayBox.innerText = total;

        console.log(calcArray);
        console.log("Final Total:", total);
    });
}
