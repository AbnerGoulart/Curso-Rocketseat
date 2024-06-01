import { GithubUser } from "./githubUser.js"

// Criar uma classe que contenha a logica dos dados
// Definir como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()

    GithubUser.search('AbnerGoulart').then(user => console.log(user))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem
    ('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {

      const userExist = this.entries.find(entry => entry.login === username)
      if(userExist) {
        throw new Error (`${username} já está cadastrado`)
      }

      const user = await GithubUser.search(username)
      if(user.login === undefined) {
        throw new Error('Usuário inexistente')
      }

      this.entries = [user, ...this.entries]
      this.entries.sort((a, b) => a.name.localeCompare(b.name));
      this.update()
      this.save()

    } catch(error) {
      alert(error.message)
    }
  }

  delete(user) {
    // Higher-order functions (map, filter, find, reduce)
    this.entries = this.entries.filter(entry => 
      entry.login !== user.login)

    this.update()
    this.save()
  }
}

// segunda classe vai criar a visualização e os eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')


    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const {value} = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()



    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm(`Confirma a remoção de ${user.name} dos seus favoritos?`)
        if(isOk) {
          this.delete(user)
        }

      }

      this.tbody.append(row)
    })

  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
      <img src="https://github.com/AbnerGoulart.png" alt="imagem de Abner">
        <a href="https://github.com/AbnerGoulart" target="_blank">
          <p>Abner Goulart</p>
          <span>AbnerGoulart</span>
        </a>
      </td>
      <td class="repositories">
        76
      </td>
      <td class="followers">
        1234
      </td>
      <td>
        <button class="remove">Remover</button>
      </td>
    `

    return tr
  }

  removeAllTr() {

    this.tbody.querySelectorAll ('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}

// a união delas se dará pela herança