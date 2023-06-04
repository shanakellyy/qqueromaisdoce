function toggleMode() {
    const html = document.documentElement
  
    html.classList.toggle("light")
    /*ESSE CÓDIGO É UM MODO SIMPLIFICADO QUE SUBSTITUI TODO ESSE CÓDIGO ABAIXO:
    if (html.classList.contains("light")) {
      html.classList.remove("light");
    } else {
      html.classList.add("light")
    }*/
  }
  