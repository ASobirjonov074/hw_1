let btns = document.querySelectorAll('.button_right_left')
let img = document.querySelector('.picture')

const images = {
    white: "img/Macbook.png",
        silver: "img/mbp14-silver-select-202110 1.png"
}

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
        // const image = images[btn.getAttribute('data-col')]
        let key = btn.getAttribute('data-col')
        img.src = images[key]
    }

//     img.setAttribute('src', img)
})