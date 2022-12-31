function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.countains("light")) {
    // se tiver light mode, add a imagem
    img.setAttribute("src", "./acets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./acets/avatar.png")
  }
}
