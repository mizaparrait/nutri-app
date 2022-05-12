const loadRegisterPage = () => {
  const template = `
    <div class="form-login-container">
      <div class="form-login">
        <div><img src="https://i.imgur.com/dFQdrud.png" /></div>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Iniciar Sesión</button>
        </form>
      </div>
    </div>
    <div class="notify-container"></div>
  `
  const section = document.getElementsByTagName('section')[0]
  section.innerHTML = template
}

const loadHeader = () => {
  const template = `
    <div><a href="#" class="logo">Nutri App</a></div>
    <ul class="h-menu">
      <li><a href="#"><i class="icon fas fa-question"></i></a></li>
      <li><a href="#"><i class="icon fas fa-cog"></i></a></li>
    </ul>
  `
  const header = document.getElementsByTagName('header')[0]
  header.innerHTML = template
}

window.onload = () => {
  loadHeader()
  loadRegisterPage()
}