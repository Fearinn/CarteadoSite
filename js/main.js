const headerButton = document.querySelector("[data-button='header']")

const headerOptions = document.querySelector("[data-options='header']")

var click = 0

headerButton.addEventListener ('click', () => {
    if (click == 0) {
        headerOptions.style.display = 'flex'
        click++
    }
    else {
        headerOptions.style.display = 'none' 
        click = 0;
    }
    
})