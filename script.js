console.log( "hello world!")

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
        let equal;

        buttons.forEach(button => 
           
            button.addEventListener("click", function() {

                    this.classList.add("bright");
                    setTimeout(() => {
                        this.classList.remove("bright");
                    }, 200); // Revert after 300ms

                // if(containerOpt.textContent == button.textContent ){
                //     return;
                // }
                    // equal = false;
                                            console.log('value2 : ' + value2);
                                            console.log('value1 : ' + value1);
                                            // console.log('total : ' + total);

                if(value2 && this.classList.contains("opt") ){ 
                    console.log("hello?");
                    // containerNum.innerHTML = button.textContent;
                    value2 = parseInt(value2);
                    // value2 = containerNum.textContent;                      

                    containerOpt.textContent = button.textContent;                // 14 + 25  = 39
                    // operator = containerOpt.textContent;                       // 39 + 17  = 56
                    // console.log(operator);                                     // 56 + 20  = 76
                    value1 = operate(value1, operator, value2 );                  // 76 + 11  = 87
                    // total = operate(value1,operator,value2);
                    containerNum.innerHTML = `${value1}`;
                    
                }


                // if(this.classList.contains("num") && value1 && value2){
                //       containerNum.innerHTML = "";
                // }

                // if(operator && value1 && value2 && (this.classList.contains("num"))){
                //     console.log("Is it...???")
                //      containerNum.innerHTML = "";
                // }
                
                    if(operator && (this.classList.contains("num"))){
                       
                        console.log("so...??")
                        
                        if(!value2){
                                containerNum.innerHTML = "";
                                 console.log("clear")
                        
                        }
                        containerNum.textContent += button.textContent; 
                        value2 = containerNum.textContent;                                        /// value 1 
                        value2 = parseInt(value2);
                        console.log('value2 : ' + value2);
                    }

                if((this.classList.contains("num")) && !operator){
                    // if(!value1){
                    //      containerNum.innerHTML = "";
                    // }                     
                    containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log('value1 : ' + value1);
                }

                if(this.classList.contains("opt")){
                    resultDisplay.textContent = containerNum.textContent; 
                    containerNum.innerHTML = ""; 
                    console.log("mmhm?");
                    containerOpt.textContent = button.textContent;
                    operator = containerOpt.textContent;
                }

                if(this.classList.contains("equal")){

                    
                    total = operate(value1,operator,value2);
                    console.log(total)
                    console.log("val 1 : " + value1);
                    console.log("val 2 : " + value2);
                    console.log(operator);
                    // resultDisplay.textContent = containerNum.textContent; 
                    containerNum.innerHTML = ""; 
                    containerOpt.innerHTML = ""; 
                    resultDisplay.innerHTML = `= ${total}`;


                    // containerOpt.textContent = button.textContent
                    // equal = true;
                    // value1 = '';
                    //         value2 = '';
                    //         operator = '';                           
                    //         console.clear();
                    //         return;        
                 }
                // if((equal) || this.classList.contains("clear") ){
                if(this.classList.contains("clear") ){
                            // containerNum.innerHTML = "";
                            // containerOpt.innerHTML = "";
                            // value1 = '';
                            // value2 = '';
                            // operator = '';                           
                            // console.clear();         
                           
                            location.reload();
                }





                })

                
        );


        // operate(value1, operator, value2 )

        