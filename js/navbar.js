function renderNavbar() {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container">
          <div class="navbar-nav">
            <a href="#link1">Reservá tu pedido</a>
            <a href="../menu.html">Menú</a>
            <a href="#link3">Sucursales</a>
            <a href="../faq.html">Conocenos</a>
          </div>
          <a class="navbar-brand" href="../home.html">
            <img src="./img/logo-chico.png" alt="Logo" style="height: 50px" />
            <span class="burger-text">Burger</span>
            <span class="lab-text">Lab</span>
          </a>
        </div>
      </nav>
    `;

  document.querySelector("header").innerHTML = navbarHTML;
}

document.addEventListener("DOMContentLoaded", renderNavbar);
