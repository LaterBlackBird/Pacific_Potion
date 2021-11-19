const fakeButtons = document.querySelectorAll('li')

for (let i = 0; i < fakeButtons.length; i++) {
    const button = fakeButtons[i];

    // console.log(`${button.id}`)

    button.addEventListener('click', e => {
        const potionCards = document.querySelectorAll(`.${button.id}`)
        potionCards.classList.add = 'glow';
    })
}
