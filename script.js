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
                square.style.backgroundColor = selectedColor;
                });
    }

})
