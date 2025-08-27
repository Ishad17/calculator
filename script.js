console.log( "MY CALCULATOR!")

function operate(value1, operator, value2 ) {
    
    if(!value2){
        console.log("console !Value2")
           return value1;
        }

    if(operator == '+' ) {
        value1 = value1 + value2;
        return value1
    }else if(operator == '-'){
        value1 = value2 - value1;
        return value1;
    }else if(operator == '%') {
        value1 = value1 % value2;
        return value1;
    }else if(operator == '*') {
        value1 = value1 * value2;
        return value1;
    } 
    if(operator == '÷' && value2 != 0) {
        value1 = value2 / value1;
        return value1;

    }else if (operator == '÷' && value1 === 0){
            return 'ERROR'
    }
}

// console.log(operate(80,'*',50));

        const buttons = document.querySelectorAll(".btn");
        const buttonsOperator = document.querySelectorAll(".opt");
        const buttonsNumber = document.querySelectorAll(".num");
        const containerNum =  document.getElementById("display-num");
        const resultDisplay =  document.getElementById("result");
        const containerOpt =  document.getElementById("display-opt");
        const clearButton = document.getElementById("btn-clear");

        let value1;                                                         
        let value2;
        let operator;
        let total;
        let equal = false;
        let operator2 = false;

        console.log()

        buttons.forEach(button => 
            
            button.addEventListener("click", function() {
                
                let text =  button.textContent;
                             
                this.classList.add("bright");
                    setTimeout(() => {
                        this.classList.remove("bright");
                    }, 200);   

                if(this.classList.contains("opt")){
                    operator = text;
                    containerOpt.textContent = text;
                    if(operator2){
                        return;
                    }
                    operator2 = true;
              
                    if(equal){
                        containerOpt.textContent = text;
                        resultDisplay.innerHTML = `${value2}`;
                        operator2 = true;
                        return;
                    }
                    containerOpt.textContent = text;
                    value1 = operate(value1,operator,value2);
                  
                    resultDisplay.innerHTML = `${value1}`;
                    value2 = value1;
                    containerNum.innerHTML = "";
                    return
                 }

                if(this.classList.contains("num")){
                    operator2 = false;
                    equal = false;
                    if(operator){
                        containerNum.textContent +=text; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log("value1 : " + value1);
                        return;
                    }
                        containerNum.textContent +=text; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log(value1);
                        return;
                }

                if(value1 && (this.classList.contains("opt"))){
                         resultDisplay.innerHTML = `${value1}`;
                         containerNum.innerHTML = "";
                         return
                }
                            
                if(this.classList.contains("equal")){
                    if(equal){
                        return;
                    }
                    equal = true;
                    value2 = operate(value1,operator,value2);
                    console.log(value2)
                    containerNum.innerHTML = ""; 
                    containerOpt.innerHTML = ""; 
                    resultDisplay.innerHTML = `= ${value2}`;
                    operator = null;
                 }
                 
                if(this.classList.contains("clear") ){
                            location.reload();
                }
                            
                })                
        );

