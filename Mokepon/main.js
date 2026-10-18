function startGame() {
    const buttonPetPlayer = document.getElementById('btn-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
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
    let randomAttack = random(1, 3)
    let spanPetEnemy = document.getElementById('pet-enemy')


    if(randomAttack == 1) {
       spanPetEnemy.innerHTML = 'Hipodoge'
    } else if(randomAttack == 2) {
        spanPetEnemy.innerHTML = 'Capipepo'
    } else {
        spanPetEnemy.innerHTML = 'Ratigueya'
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)

