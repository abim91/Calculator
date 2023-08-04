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
const blocks = document.getElementsByClassName("key");
for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener("click", function(){
        console.log(blocks[i].innerHTML);
    })
}

