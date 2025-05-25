// JavaScript Event Handling – Exercises & Mini Projects
    //  Level 1: Basic Event Handling

    // Create a button that shows "Hello Rishikesh!" in an alert when clicked.
    const divElement = document.getElementById('divElement');
    const button = document.createElement('button')
    divElement.appendChild(button).setAttribute('id', 'btn');
    button.textContent = 'Click Me'

    // show a msg on button click
    button.addEventListener('click', () => {
        alert("Hello Rishikesh!")
    })

    
    // Change Text on Button Click
    const paragraph = document.createElement('p')
    divElement.appendChild(paragraph);
    paragraph.textContent = 'I am a paragrap'   

    button.addEventListener('click', () => {
        paragraph.textContent = 'You clicked a button that is I am changin'
    })

    // As the user types in an input box, show the text live in a <div>.    
    const liveInputText = document.getElementById('liveInputText');
    const charecterCount = document.getElementById('charecterCount');
    const outputBoxDesign = document.getElementById('outputBoxDesign');
    const inputBox = document.getElementById('inputBox')

    inputBox.addEventListener('input', (e) => {
        const text = inputBox.value
        liveInputText.textContent = `Input Charecter : ${text}` // Input text show will be here.
        charecterCount.textContent = `Input Charecter Count : ${text.length}` // Input text count will appear here.

        if(text.length === 50){
           inputBox.disabled = true;          
           const p = document.createElement('p');
            p.id = 'limitMsg' // give it an ID
            console.log(p)
           outputBoxDesign.appendChild(p);
           p.textContent = 'You reached the maximum charecter length'

        }
    })

    // Reset button creating and sets all fileds as previous
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset'
    resetButton.classList.add('bg-green-500', 'text-white', 'rounded-sm', 'p-2')

    // Append reset button inside outputBoxDesign

    divElement.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
        inputBox.disabled = false;           
        const limitMsg = document.getElementById('limitMsg');
        limitMsg.textContent = '';
        inputBox.value = '';
        liveInputText.textContent = `Input Charecter : '' `
        charecterCount.textContent = `Input Charecter Count : '' `
    })

   
