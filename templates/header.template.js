export const loadHeader = () => {
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