import { loadHeader } from "../templates/header.template.js"
import { loadRegisterPage } from "../templates/login.template.js"

window.onload = () => {
  loadHeader()
  loadRegisterPage()
}