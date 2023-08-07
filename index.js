var displayValue = "";
var calculationArray = [];
populate();
clear();
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
console.log(operate(1,2,'/'));

//creating eventlistener for all buttons
function populate(){// allow it to enter multiple numbers
    const displayBox = document.getElementById("display-box");
    const blocks = document.getElementsByClassName("key");

    for(let i = 0; i < blocks.length; i++){
        blocks[i].addEventListener("click", function(){
            if((blocks[i]).classList.contains("operation")){
            }
            else{
                displayValue += blocks[i].innerHTML;
                displayBox.innerText = displayValue;
                
            }
        })
    }
}

function clear(){
    const clear = document.getElementById("clear");
    const displayBox = document.getElementById("display-box");

    clear.addEventListener("click",function(){
        console.log("here");
        displayBox.innerText = "";
    })

}