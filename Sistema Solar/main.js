let mercurySpeed = 4.3

const mercury = document.getElementById('mercurio')
const sol = document.getElementById('sol')

window.onload = () => {
    updateMercurySpeed(mercurySpeed)
}

sol.addEventListener('click', () => {
    updateMercurySpeed(mercurySpeed / 2)
})

function updateMercurySpeed(speed) {
    mercury.style.animation = `orbit ${speed}s linear infinite`

    mercurySpeed = speed
}
