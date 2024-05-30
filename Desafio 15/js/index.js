import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add("404", "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// Adicionando evento ao botão "QUERO SABER MAIS"
function addExploreButtonEvent() {
  const exploreButton = document.getElementById('btn')
  if (exploreButton) {
    exploreButton.onclick = (event) => {
      event.preventDefault()
      window.history.pushState({}, "", "/explore")
      router.handle()
    }
  }
}

// Modificar o método handle para garantir que o evento seja adicionado após carregar a página
const originalHandle = router.handle.bind(router)
router.handle = () => {
  originalHandle()
  // Aguardando a renderização do conteúdo antes de adicionar o evento ao botão
  setTimeout(addExploreButtonEvent, 50)
}