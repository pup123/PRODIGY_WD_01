// Function to change background color based on scroll position
function changeBackgroundColor() {
    // Get the scroll position
    const scrollTop = window.scrollY;
    
    const red = Math.min(255, scrollTop / 2);
    const green = Math.min(255, 120- scrollTop / 2); 
    const blue = 300; 

    
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('scroll', changeBackgroundColor);
