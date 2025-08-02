console.log( "hello world!")

        const buttons = document.querySelectorAll(".btn");
        const container = document.getElementById("display-container");


        buttons.forEach(button => 
           
            button.addEventListener("click", function() {   

                   const newDiv = document.createElement("div");
                   
                    newDiv.id = "display";
                    newDiv.style.width = "10px";
                    newDiv.style.height = "10px";
                    newDiv.style.padding = "20px";
                    newDiv.style.color = "white";
                    newDiv.style.borderRadius = "5px";
                    newDiv.style.margin = "5px";
                    newDiv.style.backgroundColor = "#035c54ff";
                    newDiv.textContent = button.textContent;
                    container.appendChild(newDiv);


                // const outputDiv = document.getElementById("display");
                // const text = button.textContent; // Get the text inside the button
                // outputDiv.textContent = text;
            })
        );


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
    return "ERROR"
    }
    return a / b;
}

