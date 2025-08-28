

console.log( "MY CALCULATOR!")


function showSharkAlert() {
     document.getElementById('sharkAlert').style.display = 'flex';
}

    function reloadPage() {
      location.reload();
    }

function operate(value1, operator, value2 ) {
    
    if(!value2){
          return value1;
        }
    if(operator == '+' ) {
                console.log('percentage?')
        value1 = value1 + value2;
        return value1
    }else if(operator == '-'){
        value1 = value2 - value1;
        return value1;
    }else if(operator == '*') {
        value1 = value1 * value2;
        return value1;
    }else if(operator == '%'){

        value1 = value2 * value1/100;
        console.log(value1);
        return value1; 
        return value1;
    }else if(operator == '%'){
        value1 = value2 * value1/100;
        console.log(value1);
        return value1; 
    } 
    if(operator == '÷' && value1 != 0) {
        value1 = value2 / value1;
        return value1;
    }else if (operator === '÷' && value1 === 0){
            showSharkAlert();
            
    }
}
    
//     if(!value2){
//           return value1;
//         }
//     if(operator == '+' ) {
//         value1 = value1 + value2;
//         return value1
//     }else if(operator == '-'){
//         value1 = value2 - value1;
//         return value1;
//     }else if(operator == '%') {
//         value1 = value1 % value2;
//         return value1;
//     }else if(operator == '*') {
//         value1 = value1 * value2;
//         return value1;
//     } 
//     if(operator == '÷' && value2 != 0) {
//         value1 = value2 / value1;
//         return value1;

//     }else if (operator == '÷' && value1 === 0){
//             return 'ERROR'
//     }
// }

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
        let point;
        let equal = false;
        let operator2 = false;
        let operatorX;
      
        buttons.forEach(button => 
            
            button.addEventListener("click", function() {
                
                let text =  button.textContent;
                let numdisplay = containerNum.textContent;
                             
                this.classList.add("bright");
                    setTimeout(() => {
                        this.classList.remove("bright");
                    }, 200);   

                if(this.classList.contains("del")){
                    numdisplay = numdisplay.toString().slice(0, -1);
                    containerNum.innerHTML = numdisplay; 
                    console.log(numdisplay); 
                }

                if(this.classList.contains("point")){
                    if(point){
                        return;
                    }
                    containerNum.textContent +=text; 
                    point = true;
                }

                if(this.classList.contains("opt")){
                    point = false;
                    console.log(operator);
                    value1 = operate(value1,operator,value2);
                    console.log(value1);
                    operator = text;
                    // console.log(operator);
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
                    // containerOpt.textContent = text;
                    resultDisplay.innerHTML = `${value1}`;                    
                    value2 = value1;
                    containerNum.innerHTML = "";
                    return;
                 }
                else if(this.classList.contains("num")){


                    // if(equal){
                    //     console.log("are you mad?")
                    // }

                    operator2 = false;
                    equal = false;
                    if(operator){
                    //     containerNum.textContent +=text; 
                    //     value1 = containerNum.textContent;                                        /// value 1 
                    //     value1 = parseInt(value1);
                    //     // console.log("value1 : " + value1);
                    //     return;
                    }
                        containerNum.textContent +=text; 
                        value1 = containerNum.textContent;
                        console.log(value1);                                        /// value 1 
                        value1 = Number(value1);
                    //     // console.log(value1);
                        return;
                }
                       
                else if(this.classList.contains("equal")){

                    
                    if(equal || operator2){
                        containerOpt.innerHTML = ""; 
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
                else if(this.classList.contains("clear") ){
                            location.reload();
                }
                // else if(value1 && (this.classList.contains("opt"))){
                //          resultDisplay.innerHTML = `${value1}`;
                //          containerNum.innerHTML = "";
                //                                  console.log("mmhm?");
                //          return
                // }   


                if(this.classList.contains("test") ){
                        console.log("~~Test results~~");
                        console.log("value1 : " + value1);
                        console.log("value2 : " + value2);
                        console.log("Operator2 : " + operator2);
                        console.log("Operator : " + operator);
                }
                
                            
            })                
        );


