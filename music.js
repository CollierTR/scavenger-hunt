const btnArr = document.querySelectorAll('button')
const display = document.getElementById('content')
const answer = document.getElementById('answer').value

btnArr.forEach(element => {
    element.addEventListener('click', changeContent)
});

function changeContent () {
    if (true) {
        display.innerHTML = `You were lucky... <p><a href="cliff-hanger.html">cliff-hanger.html</a></p>`
    } else {
        display.innerHTML = `Wrong answer`
    }
}