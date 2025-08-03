console.log( "hello world!")

function operate(num1, operator, num2 ) {
    
    if(operator == '+' ) {
        value = (num1 + num2);
        return value
    }else if(operator == '-'){
        value = num1 - num2;
        return value;
    }else if(operator == '%') {
        value = num1 % num2;
        return value;
    }else if(operator == '*') {
        value = num1 * num2;
        return value;
    } 
    if(operator == '/' && num2 != 0) {
        value = num1 / num2;
        return value;
    }else if (operator == '/' && num2 === 0){
            return 'ERROR'
    }
}

console.log(operate(80,'*',50));

        const buttons = document.querySelectorAll(".btn");
        const buttonsOperator = document.querySelectorAll(".opt");
        const buttonsNumber = document.querySelectorAll(".num");
        const containerNum =  document.getElementById("display-num");
        const containerOpt =  document.getElementById("display-opt");
        const clearButton = document.getElementById("btn-clear");


                let value1;
                let value2;
                let operator;

        buttons.forEach(button => 
           
            button.addEventListener("click", function() {   

                // console.log(operator);

                if(operator){
                        if(!value2){
                            document.getElementById("display-num").innerHTML = "";
                        }

                        containerNum.textContent += button.textContent; 
                        value2 = containerNum.textContent + ': Value2';   
                        value2 = parseInt(value2);
                        }


                    if(this.classList.contains("opt") ){
                        // document.getElementById("display-num").innerHTML = "";
                            operator = containerOpt.textContent = button.textContent;
                            // console.log(operator);
                        //     console.log(typeof operator);

                        // console.log(value1)

                    }else if(this.classList.contains("num") && !(value2) ){
                        containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent + ': Value1';   
                        value1 = parseInt(value1);
                        console.log('value1 : ' + value1);
                    
                    }else if(this.classList.contains("clear") ){
                            document.getElementById("display-num").innerHTML = "";
                            document.getElementById("display-opt").innerHTML = "";
                              value1 = '';
                                value2 = '';
                                operator = '';                           
                            console.clear();        
                    }

                         if(this.classList.contains("equal")){
                            containerOpt.textContent = button.textContent;
                            console.log("val 1 : " + value1);
                            console.log("val 2 : " + value2);
                            console.log(operate(value1,operator,value2));

                            document.getElementById("display-num").innerHTML = `${operate(value1,operator,value2)}`;
                            return;
                         }
                    
                
                })
        );


        // operate(value1, operator, value2 )

        