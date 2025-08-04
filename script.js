console.log( "hello world!")

function operate(num1, operator, num2 ) {
    
    if(operator == '+' ) {
        num1 = (num1 + num2);
        return num1
        
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
        let total;

        buttons.forEach(button => 
           
            button.addEventListener("click", function() {

                        if((this.classList.contains("opt"))){
                            if(!value2){
                                document.getElementById("display-num").innerHTML = "";
                            }
                        // console.log("no value2?")
                        //     containerNum.textContent += button.textContent; 
                        //     total = containerNum.textContent;
                        //     total = parseInt(total);
                        //     total = total + value2;
                        //     containerNum.innerHTML = `${operate(value1,operator,value2)}`;
                        // }
                        console.log(operator);
                        // document.getElementById("display-num").innerHTML = "";
                        containerNum.textContent += button.textContent; 
                        value2 = containerNum.textContent;
                        value2 = parseInt(value2);
                        console.log('value2 : ' + value2);
                        return;
                        }

                    if(this.classList.contains("opt")  ){
                        document.getElementById("display-num").innerHTML = "";
                        // total = operate(value1,operator,value2);
                        operator = containerOpt.textContent = button.textContent;
                        // console.log(typeof operator);
                        console.log('value1 : ' + value1);
                        console.log(operator);
                        // console.log(total)
                        // containerNum.innerHTML = `${total}`;

                    }else if(this.classList.contains("num")){
                        
                        containerNum.textContent += button.textContent; 
                        value1 = containerNum.textContent;                                        /// value 1 
                        value1 = parseInt(value1);
                        console.log('value1 : ' + value1);

                    }else if(this.classList.contains("clear") ){
                            containerNum.innerHTML = "";
                            containerOpt.innerHTML = "";
                            value1 = '';
                            value2 = '';
                            operator = '';                           
                            console.clear();        
                    }
                         if(this.classList.contains("equal")){

                            console.log("val 1 : " + value1);
                            console.log("val 2 : " + value2);
                            console.log(operator);

                            containerNum.innerHTML = `${operate(value1,operator,value2)}`;
                            // containerOpt.textContent = button.textContent;
                            // console.log("val 1 : " + value1);
                            // console.log("val 2 : " + value2);
                            // console.log( value1 + value1)
                            console.log(operate(value1,operator,value2));
                            
                            // console.log('total : ' + total);
                           
                         }
                })
        );


        // operate(value1, operator, value2 )

        