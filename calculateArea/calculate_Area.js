//Variable  
let length;
let width;

//function to calcuate area of a give rectangale 
function calculateArea(){
    //collecting users input and parse it into number 
    length = parseFloat(document.querySelector('#length').value);
    width = parseFloat(document.querySelector('#width').value);

    let area = length * width;
    
    //dynamically displaying the result to the frontend 
    document.querySelector('#result').innerText =`The area of the rectangle is: ${area}`;
}

//accessing the button from html using DOM
let button = document.querySelector('button');
//adding event-listener to the button 
button.addEventListener('click', calculateArea);