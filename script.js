console.log( "MY CALCULATOR!")

function operate(value1, operator, value2 ) {
    
    if(!value2){
           return value1;
        }

    if(operator == '+' ) {
        value1 = value1 + value2;
        return value1
    }else if(operator == '-'){
        value1 = value1 - value2;
        return value1;
    }else if(operator == '%') {
        value1 = value1 % value2;
        return value1;
    }else if(operator == '*') {
        value1 = value1 * value2;
        return value1;
    } 
    if(operator == '/' && value2 != 0) {
        value1 = value1 / value2;
        return value1;
    }else if (operator == '/' && value2 === 0){
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

        buttons.forEach(button => 
            
            button.addEventListener("click", function() {

                this.classList.add("bright");
                    setTimeout(() => {
                        this.classList.remove("bright");
                    }, 200);   

                if(this.classList.contains("opt")){
                    
                    operator = button.textContent;
                    if(operator2){
                        return;
                    }
                    operator2 = true;
                    operator = button.textContent;
                    if(equal){
                        console.log("equal is true!")
                        containerOpt.textContent = button.textContent;
                        resultDisplay.innerHTML = `${value2}`;
                        operator2 = true;
                        return;
                    }
                    containerOpt.textContent = button.textContent;
                    value1 = operate(value1,operator,value2);
                    console.log(total)
                    resultDisplay.innerHTML = `${value1}`;
                    value2 = value1;
                    containerNum.innerHTML = "";
                    return
                 }

                if(this.classList.contains("num")){
                    operator2 = false;
                    equal = false;
                    if(operator){
                        containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log("value1 : " + value1);
                        return;
                    }

                    containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log(value1);
                        console.log("hello?");
                        return;
                }

                if(value1 && (this.classList.contains("opt"))){
                         console.log('mmhm??');
                         resultDisplay.innerHTML = `${value1}`;
                         containerNum.innerHTML = "";
                         return
                }

                if(this.classList.contains("test") ){
                        console.log("Test results");
                        console.log("value1 : " + value1);
                        console.log("value2 : " + value2);
                        console.log("Operator2 : " + operator2);
                        console.log("Operator : " + operator);
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
                 }
                 
                if(this.classList.contains("clear") ){
                            location.reload();
                }
                       
                     // Revert after 200ms               
                })                
        );


        // operate(value1, operator, value2 )

        
//     window.addEventListener('DOMContentLoaded', () => {
//     const sequence = ['btn-5', 'btn-0', 'btn-0', 'btn-add', 'btn-4', 'btn-0', 'btn-0' ,'btn-add','btn-sub',, 'btn-4', 'btn-0', 'btn-0' ,'btn-add'];

//     sequence.forEach((id, index) => {
//       setTimeout(() => {
//         document.getElementById(id).click();
//       }, index * 100); // delay between clicks for realism (300ms)
//     });
    
//   });