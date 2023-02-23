let player = ''
let r = document.getElementById('rock')
let p = document.getElementById('paper')
let s = document.getElementById('scissors')
let pc = ''
let you = document.getElementById('resy')
let comp = document.getElementById('resc')
let txth1 = document.getElementById('txth1')
let res = document.getElementById('res')
let txth2 = document.querySelector('#txth2>h2')
let yc = document.getElementById('youV')
let cc = document.getElementById('comV')
let yp = 0
let cp = 0
let vic = ''
let def = ''


function chooser() {
    player = 'rock'
    rock.style.background = 'linear-gradient(aqua, rgb(255, 0, 106))'
    paper.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
    scissors.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
}


function choosep() {
    player = 'paper'
    paper.style.background = 'linear-gradient(aqua, rgb(255, 0, 106))'
    rock.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
    scissors.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
}

function chooses() {
    player = 'scissors'
    scissors.style.background = 'linear-gradient(aqua, rgb(255, 0, 106))'
    rock.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
    paper.style.background = 'linear-gradient(rgb(123, 220, 250), rgb(255, 107, 169))'
}

function winner() {
    if (player === 'rock' && pc === 'rock') {
        txth1.innerHTML = '<h1>TIE!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.innerText = 'CHOOSE ANOTHER:'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        comp.innerHTML = '<h3>&#9994;</h3>'
        you.innerHTML = '<h3>&#9994;</h3>'
        tie = ' '
    } else if (player === 'rock' && pc === 'paper') {
        txth1.innerHTML = '<h1>DEFEAT!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.innerText = 'CHOOSE ANOTHER:'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        comp.innerHTML = '<h3>&#128195;</h3>'
        you.innerHTML = '<h3>&#9994;</h3>'
        def = 'def'
    } else if (player === 'rock' && pc === 'scissors') {
        txth1.innerHTML = '<h1>VICTORY!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.innerText = 'CHOOSE ANOTHER:'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        comp.innerHTML = '<h3>&#9986;</h3>'
        you.innerHTML = '<h3>&#9994;</h3>'
        vic = 'vic'
    } else if (player === 'paper' && pc === 'rock') {
        txth1.innerHTML = '<h1>VICTORY!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#9994;</h3>'
        you.innerHTML = '<h3>&#128195;</h3>'
        vic = 'vic'
    } else if (player === 'paper' && pc === 'paper') {
        txth1.innerHTML = '<h1>TIE!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#128195;</h3>'
        you.innerHTML = '<h3>&#128195;</h3>'
        tie = 'tie'
    } else if (player === 'paper' && pc === 'scissors') {
        txth1.innerHTML = '<h1>DEFEAT!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#9986;</h3>'
        you.innerHTML = '<h3>&#128195;</h3>'
        def = 'def'
    } else if (player === 'scissors' && pc === 'rock') {
        txth1.innerHTML = '<h1>DEFEAT!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#9994;</h3>'
        you.innerHTML = '<h3>&#9986;</h3>'
        def = 'def'
    } else if (player === 'scissors' && pc === 'paper') {
        txth1.innerHTML = '<h1>VICTORY!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#128195;</h3>'
        you.innerHTML = '<h3>&#9986;</h3>'
        vic = 'vic'
    } else if (player === 'scissors' && pc === 'scissors') {
        txth1.innerHTML = '<h1>TIE!</h1>'
        txth1.style.marginBottom = '-80px'
        txth2.style.paddingTop = '20px'
        res.style.display = 'inline-block'
        txth2.innerText = 'CHOOSE ANOTHER:'
        comp.innerHTML = '<h3>&#9986;</h3>'
        you.innerHTML = '<h3>&#9986;</h3>'
        tie = 'tie'
    }
}

function placar() {
    if (vic === 'vic' && def === '') {
        yp++
        yc.innerHTML = `<p> ${yp} </p>`
    } else if (def === 'def') {
        cp++
        cc.innerHTML = `<p> ${cp} </p>`
    } else {

    }
}

function action() {
    if (player === '') {
        alert('[ERROR] No option was chosen. Please, choose one and try again.')
        return
    } else {
        vic = ''
        def = ''
        let n = Math.floor(Math.random() * 3)
        console.log(n)
        switch (n) {
            case 0:
                pc = 'rock'
                comp.innerHTML = '<h3>&#9994;</h3>'
                break;
            case 1:
                pc = 'paper'
                comp.innerHTML = '<h3>&#128195;</h3>'
                break;
            case 2:
                pc = 'scissors'
                comp.innerHTML = '<h3>&#9986;</h3>'
                break;
        }
    }
    winner()
    placar()
}

