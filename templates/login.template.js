export const loadRegisterPage = () => {
  const template = `
    <div class="form-login-container">
      <div class="form-login">
        <div><img src="../assets/images/perfil_img.png" /></div>
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