let selectedColor = "";
const color_buttons = document.querySelectorAll(".color_button")

color_buttons.forEach(color_button => {
    color_button.addEventListener('click', () => {
        selectedColor = color_button.id;
    })
})

const num_button = document.getElementById('num_button');

num_button.addEventListener('click', function() {
     
    const num = prompt("enter a number");

    const container = document.getElementById('container');

    container.innerHTML = '';
    
    container.style.visibility = "visible";

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
            square.classList.add('square');
            
            let size = 960 / num;
            square.style.width = size + "px";
            square.style.height = size + "px";
            container.appendChild(square);
            
            // Hover effect 
            square.addEventListener('mouseover', () => {
                let random = Math.floor(Math.random() * 100) / 100
                if (selectedColor === "red") {
                    square.style.backgroundColor = `rgba(255, 0, 0, ${random})`;
                }
                else if (selectedColor === "green") {
                    square.style.backgroundColor = `rgba(0, 250, 0, ${random})`;
                }
                else if (selectedColor === "blue") {
                    square.style.backgroundColor = `rgba(0, 0, 250, ${random})`;
                }
                });
    }

})
