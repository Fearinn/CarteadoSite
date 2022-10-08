const headerButton = document.querySelector("[data-button='header']")

const headerOptions = document.querySelector("[data-options='header']")

var click = 0

/* const script = document.querySelector('script')

function removeTwitterIndex() {
    const twitter = document.querySelector('iframe')

    const twitterElements = twitter.querySelectorAll('*')

    twitter.setAttribute('tabindex', '-1')

    twitterElements.forEach(
        element => element.setAttribute('tabindex', '-1')
    )

}

setTimeout(removeTwitterIndex, 10000) */


headerButton.addEventListener('click', () => {
    if (click == 0) {
        headerOptions.style.display = 'flex'
        click++
    }
    else {
        headerOptions.style.display = 'none'
        click = 0;
    }

})
