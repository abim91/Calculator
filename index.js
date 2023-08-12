var displayValue = "";
var calcArray = [];
const displayBox = document.getElementById("display-box");
populate();

operation();

function operate(num1,num2,operator){
    if(num2 == 0 && operator == '/'){
        alert("Sorry our ice cream machine is broken.");
        return;
    }
        
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
    console.log("here");
    displayBox.innerText = "";
    displayValue = ""

}

function operation(){
    const operations = document.getElementsByClassName("operation");
    
    for(let j =0; j < operations.length; j++){
        operations[j].addEventListener('click',function(){
            if(calcArray.length >= 2){
                if(displayValue != "") calcArray.push(displayValue);
                clear();
                getAnswer();
                console.log("it pops now");
                calcArray.push(operations[j].innerHTML);
            } 
            else{
                if(displayValue != "") calcArray.push(displayValue);
                calcArray.push(operations[j].innerHTML);
                clear();
            }
           
        })
    }
}



function getAnswer() {
    
    const displayBox = document.getElementById("display-box");        
        displayValue = "";
       let total = parseFloat(calcArray[0]); 

        for (let k = 1; k < (calcArray.length ); k += 2) {
            console.log("within calculation array");
            let operator = calcArray[k];
            let operand = parseFloat(calcArray[k + 1]) ;
            
            total = operate(total, operand, operator);
            if(total == 'undefined'){
                total = '';
            }
                
        }

        displayBox.innerText = total;

        console.log(calcArray);
        console.log("Final Total:", total);
}

const equal = document.getElementById("equalBtn");
equal.addEventListener('click', function(){
    if(((calcArray.length % 2) != 0) || (calcArray.length) == 0 ){
        clear();
       // displayBox.innerHTML = "ERROR";

    }
    else{
        calcArray.push(displayValue);
        getAnswer();
    }
});


const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click",function(){
    calcArray = [];
    clear();
})