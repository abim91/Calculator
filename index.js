var displayValue = "";
var calcArray = [];
populate();
clear();
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

function getAnswer(){// not finished
    const equal = document.getElementById("equalBtn");
    const operators = ["+","-","/","x"];
    equal.addEventListener('click',function(){
        numOfLoop = calcArray.length/3;
        let firstN = 0;
        let operator = 1;
        let secondN = 2;
        let total = 0;
        calcArray.push(displayValue);
        displayValue = "";
        
        if(((calcArray.length % 3) == 0)){

           // clear();
            for(let k = 0; k < numOfLoop; k++){
                total = total + operate(calcArray[firstN],calcArray[secondN], calcArray[operator]);
                console.log(total);
                firstN += 3;
                operator += 3;
                secondN += 3;
               // calcArray[firstN] = total;

            }
            console.log("we here");
            console.log(calcArray);
            console.log(total);
        }
        else{
            
            console.log("invalid");
            console.log(calcArray);
        }



    })
}