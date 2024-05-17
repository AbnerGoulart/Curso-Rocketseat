// Definindo as velocidades iniciais das órbitas dos planetas
const planetsSpeed = {
    mercurio: 8.8,
    venus: 22.5,
    terra: 36.5,
    lua: 2.7,
    marte: 68.7,
    jupiter: 433.3,
    saturno: 1075.9,
    urano: 3068.5,
    netuno: 6019.1
  };
  
  // Obtendo os elementos dos planetas e do sol pelo ID
  const planets = {
    mercurio: document.getElementById('mercurio'),
    venus: document.getElementById('venus'),
    terra: document.getElementById('terra'),
    lua: document.getElementById('lua'),
    marte: document.getElementById('marte'),
    jupiter: document.getElementById('jupiter'),
    saturno: document.getElementById('saturno'),
    urano: document.getElementById('urano'),
    netuno: document.getElementById('netuno')
  };
  
  const sol = document.getElementById('sol');
  
  // Define um manipulador para o evento onload da janela
  window.onload = () => {
    updatePlanetsSpeed(planetsSpeed);
  };
  
  // Adiciona um evento de clique ao sol que reduz a velocidade da órbita dos planetas pela metade
  sol.addEventListener('click', () => {
    for (const planet in planetsSpeed) {
      planetsSpeed[planet] /= 2;
    }
    updatePlanetsSpeed(planetsSpeed);
  });
  
  // Função para ajustar a duração da animação dos planetas
  function updatePlanetsSpeed(speed) {
    for (const planet in planets) {
      planets[planet].style.animation = `orbit ${speed[planet]}s linear infinite`;
    }
  }
  