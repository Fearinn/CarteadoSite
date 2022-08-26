const headerButton = document.querySelector("[data-button='header']")

const headerOptions = document.querySelector("[data-options='header']")

headerButton.addEventListener ('click', () => {
    if (headerOptions.style.display == 'none') {
        headerOptions.style.display = 'flex'
    }
    else {
        headerOptions.style.display = 'none' 
    }
    
})