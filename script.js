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



        const buttons = document.querySelectorAll(".num");
        const buttonsOperator = document.querySelectorAll(".opt");
        const container = document.getElementById("display-container");
        const clearButton = document.getElementById("btn-clear");

        buttons.forEach(button => 
           
        button.addEventListener("click", function() {   

                //    container.textContent = button.textContent;
                   container.textContent += button.textContent; 
                   console.log(typeof button.textContent);
                   let value1 = container.textContent;   
                   
                   console.log(container.textContent);
                  

                    // let num1 = button.textContent; 

                    // const displayValue = document.getElementById("#display-container")
                        
                    // button.style.backgroundColor = "rgba(1, 60, 255, 1)";
                    // setTimeout(() => {
                    //     button.style.backgroundColor = ""; // resets to default or previous style
                    // }, 200);

            })
            
        );
        

        clearButton.addEventListener("click" , function() {
        document.getElementById("display-container").innerHTML = "";
        console.clear();
                      
            this.style.backgroundColor = 'rgba(184, 0, 0, 1)'
             setTimeout(() => {
                        this.style.backgroundColor = ""; // resets to default or previous style
                    }, 200);
                return 2;
        });


let operator;
let num2;

// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function divide(a, b) {
//     if (b === 0) {
//     return "ERROR"
//     }
//     return a / b;
// }



                    // if(operator == '+' ) {
                    //     value = (num1 + num2);
                    //     return value
                    // }else if(operator == '-'){
                    //     value = num1 - num2;
                    //     return value;
                    // }else if(operator == '%') {
                    //     value = num1 % num2;
                    //     return value;
                    // }else if(operator == '*') {
                    //     value = num1 * num2;
                    //     return value;
                    // } 
                    // if(operator == '/' && num2 != 0) {
                    //     value = num1 / num2;
                    //     return value;
                    // }else if (operator == '/' && num2 === 0){
                    //         return 'ERROR'
                    // }




                    
        // const buttonsNum = document.querySelectorAll(".num");
        // const buttonsOperator = document.querySelectorAll(".opt");
        // const container = document.getElementById("display-container");
        // const clearButton = document.getElementById("btn-clear");

        // buttonsNum.forEach(buttonNum =>

        // buttonNum.addEventListener("click", function() {
            

        //         //    container.textContent = button.textContent;
        //            container.textContent += buttonNum.textContent; 
        //            console.log(typeof buttonNum.textContent);
        //            let value1 = container.textContent;   
        //         //    return value1;
        //            console.log(container.textContent);

                   
                  

        //             // let num1 = button.textContent; 

        //             // const displayValue = document.getElementById("#display-container")
                        
        //             // button.style.backgroundColor = "rgba(1, 60, 255, 1)";
        //             // setTimeout(() => {
        //             //     button.style.backgroundColor = ""; // resets to default or previous style
        //             // }, 200);

        //     })
            
        // );