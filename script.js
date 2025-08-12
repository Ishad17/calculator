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
        // let operator2 = false;

        buttons.forEach(button => 
            
            button.addEventListener("click", function() {
                // if(value2 && this.classList.contains("opt") ){ 

                //     if(operator2 == true){
                //         console.log("hello?? ");
                //         return;
                //     }

                //     value2 = parseInt(value2);
                //     containerOpt.textContent = button.textContent;     // 14 + 25  = 39
                //     value1 = operate(value1, operator, value2 );       // 39 + 17  = 56
                //     containerNum.innerHTML = `${value1}`;              // 56 + 20  = 76
                //                                                        // 76 + 11  = 87                   
                // }
                //     if(operator && (this.classList.contains("num"))){
                //          if(!value2){
                //                 containerNum.innerHTML = "";
                //         }
                //         containerNum.textContent += button.textContent; 
                //         value2 = containerNum.textContent;                                        /// value 1 
                //         value2 = parseInt(value2);
                //         // console.log('value2 : ' + value2);
                //           console.log("helloooo?");
                //           operator2 = false;
                //     }
                                                    
                if((this.classList.contains("num"))){


                    if(operator || !value2){
                        console.log('mmhm??');
                       
                        containerNum.textContent += button.textContent; 
                        value2 = containerNum.textContent;                                        /// value 1 
                        value2 = parseInt(value2);
                        console.log(value2);
                        return;
                    }

                    containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log(value1);
                        console.log("hello?");
                        // operator2 = false;
                }

                if(this.classList.contains("opt")){
                    // operator2 = true;
                    // resultDisplay.innerHTML = `= ${total}`;

                    containerOpt.textContent = button.textContent;
                    operator = containerOpt.textContent;
                    console.log("operator " + operator);
                    resultDisplay.textContent = containerNum.textContent; 
                    containerNum.innerHTML = ""; 
                    if(value1){
                           console.log("true")
                        return;
                    }
                    //     console.log("true")
                            // resultDisplay.innerHTML = `= ${total}`;
                    // }

                    // if(containerNum.textContent){
                    //     return;
                    // }

                    
                    
                    console.log("Aahan?");
                    

                }
                
                if(this.classList.contains("equal")){
                    equal = true; 
                    total = operate(value1,operator,value2);
                    console.log(total)
                    containerNum.innerHTML = ""; 
                    containerOpt.innerHTML = ""; 
                    resultDisplay.innerHTML = `= ${total}`;
                 }
                 
                if(this.classList.contains("clear") ){
                            location.reload();
                }
                       
                 this.classList.add("bright");
                    setTimeout(() => {
                        this.classList.remove("bright");
                    }, 200);        // Revert after 200ms               
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