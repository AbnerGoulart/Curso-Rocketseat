export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
    console.log(this.routes)
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
}
