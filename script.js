console.log( "hello world!")

function operate(value1, operator, value2 ) {
    
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
        const containerOpt =  document.getElementById("display-opt");
        const clearButton = document.getElementById("btn-clear");

        let value1;                                                         
        let value2;
        let operator;
        let total;
        let equal;

        buttons.forEach(button => 
           
            button.addEventListener("click", function() {
                    // equal = false;
                    
                if(value2 && this.classList.contains("opt") ){ 
                        console.log("hello?");
                   
                        // containerNum.innerHTML = button.textContent;
                    
                    value2 = parseInt(value2);
                    // value2 = containerNum.textContent;                       14 + 25  = 39
                    //                                                          39 + 17  = 56
                    containerOpt.textContent = button.textContent;
                    // operator = containerOpt.textContent;
                    // console.log(operator);
                    total = operate(value1, operator, value2 );
                    // total = operate(value1,operator,value2);
                    containerNum.innerHTML = `${total}`;
                    
                    return;   
                }
                
                    if(operator){
                        
                        if(!value2){
                                containerNum.innerHTML = "";
                        }
                        containerNum.textContent += button.textContent; 
                        value2 = containerNum.textContent;                                        /// value 1 
                        value2 = parseInt(value2);
                        console.log('value2 : ' + value2);
                    }

                if((this.classList.contains("num")) && !operator){
                    containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log('value1 : ' + value1);
                }

                if(this.classList.contains("opt")){
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
                    containerNum.innerHTML = `${total}`;
                    // equal = true;
                    // value1 = '';
                    //         value2 = '';
                    //         operator = '';                           
                    //         console.clear();
                    //         return;        
                 }
                // if((equal) || this.classList.contains("clear") ){
                if(this.classList.contains("clear") ){
                            containerNum.innerHTML = "";
                            containerOpt.innerHTML = "";
                            value1 = '';
                            value2 = '';
                            operator = '';                           
                            console.clear();        
                }



              
                
                    //     if((this.classList.contains("opt"))){
                    //         if(!value2){
                    //             document.getElementById("display-num").innerHTML = "";
                    //         }
                    //     // console.log("no value2?")
                    //     //     containerNum.textContent += button.textContent; 
                    //     //     total = containerNum.textContent;
                    //     //     total = parseInt(total);
                    //     //     total = total + value2;
                    //     //     containerNum.innerHTML = `${operate(value1,operator,value2)}`;
                    //     // }
                    //     console.log(operator);
                    //     // document.getElementById("display-num").innerHTML = "";
                    //     containerNum.textContent += button.textContent; 
                    //     value2 = containerNum.textContent;
                    //     value2 = parseInt(value2);
                    //     console.log('value2 : ' + value2);
                    //     return;
                    //     }

                    // if(this.classList.contains("opt")  ){
                    //     document.getElementById("display-num").innerHTML = "";
                    //     // total = operate(value1,operator,value2);
                    //     operator = containerOpt.textContent = button.textContent;
                    //     // console.log(typeof operator);
                    //     console.log('value1 : ' + value1);
                    //     console.log(operator);
                    //     // console.log(total)
                    //     // containerNum.innerHTML = `${total}`;

                    // }else if(this.classList.contains("num")){
                        
                    //     containerNum.textContent += button.textContent; 
                    //     value1 = containerNum.textContent;                                        /// value 1 
                    //     value1 = parseInt(value1);
                    //     console.log('value1 : ' + value1);

                    // }else
                    // 
                    


                    //      if(this.classList.contains("equal")){

                    //         console.log("val 1 : " + value1);
                    //         console.log("val 2 : " + value2);
                    //         console.log(operator);

                    //         containerNum.innerHTML = `${operate(value1,operator,value2)}`;
                    //         // containerOpt.textContent = button.textContent;
                    //         // console.log("val 1 : " + value1);
                    //         // console.log("val 2 : " + value2);
                    //         // console.log( value1 + value1)
                    //         console.log(operate(value1,operator,value2));
                            
                    //         // console.log('total : ' + total);
                           
                    //      }
                })
        );


        // operate(value1, operator, value2 )

        