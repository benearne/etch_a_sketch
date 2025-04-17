const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
        square.classList.add('square');

        // Hover effect 
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
}