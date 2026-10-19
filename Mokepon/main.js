let playerAttack
let enemyAttack


function startGame() {
    const buttonPetPlayer = document.getElementById('btn-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)

    let fireButton = document.getElementById('btn-fire')
    fireButton.addEventListener('click', fireAttack)

    let waterButton = document.getElementById('btn-water')
    waterButton.addEventListener('click', waterAttack)

    let earthButton = document.getElementById('btn-earth')
    earthButton.addEventListener('click', earthAttack)
}

function selectPetPlayer() {
    const hipodogeInput = document.getElementById('hipodoge')
    const capipepoInput = document.getElementById('capipepo')
    const ratigueyaInput = document.getElementById('ratigueya')
    let spanPetPlayer = document.getElementById('pet-player')
 
    if(hipodogeInput.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    }
        
    else if(capipepoInput.checked) {
       spanPetPlayer.innerHTML = 'Capipepo'
    }

    else if(ratigueyaInput.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    }

    else {
       alert("Selecciona una mascota") 
    }

    selectPetEnemy()
}


function selectPetEnemy() {
    let randomPet = random(1, 3)
    let spanPetEnemy = document.getElementById('pet-enemy')


    if(randomPet == 1) {
       spanPetEnemy.innerHTML = 'Hipodoge'
    } else if(randomPet == 2) {
        spanPetEnemy.innerHTML = 'Capipepo'
    } else {
        spanPetEnemy.innerHTML = 'Ratigueya'
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function fireAttack() {
    playerAttack = 'Fire'
    enemyRandomAttack()
}

function waterAttack() {
    playerAttack = 'Water'
    enemyRandomAttack()
}

function earthAttack() {
    playerAttack = 'Earth'
    enemyRandomAttack()
}

function enemyRandomAttack() {
    let randomAttack = random(1,3)

    if(randomAttack == 1) {
        enemyAttack = 'Fire'
    } else if(randomAttack == 2) {
        enemyAttack = 'Water'
    } else {
        enemyAttack = 'Earth'
    }

    enemyAttack
}

window.addEventListener('load', startGame)

