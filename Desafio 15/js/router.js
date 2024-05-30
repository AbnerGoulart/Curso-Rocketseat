export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    
    this.handle()
  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        this.updateActiveLink(pathname)
        this.updateBackground(pathname)
      })
  }

  updateActiveLink(pathname) {
    const links = document.querySelectorAll('.menu a')
    links.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === pathname) {
        link.classList.add('active')
      }
    })
  }

  updateBackground(pathname) {
    const body = document.body
    body.className = '' // Remove todas as classes
    switch (pathname) {
      case '/':
        body.classList.add('home-page')
        break
      case '/universe':
        body.classList.add('universe-page')
        break
      case '/explore':
        body.classList.add('explore-page')
        break
      default:
        body.classList.add('default-page')
        break
    }
  }
}
