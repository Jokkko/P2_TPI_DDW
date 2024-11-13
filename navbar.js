function renderNavbar() {
  const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container">
          <div class="navbar-nav">
            <a href="#link1">Reservá tu pedido</a>
            <a href="#link2">Menú</a>
            <a href="#link3">Sucursales</a>
            <a href="#link4">Conocenos</a>
          </div>
          <a class="navbar-brand" href="#">
            <img src="./logo-chico.png" alt="Logo" style="height: 50px" />
            <span class="burger-text">Burger</span>
            <span class="lab-text">Lab</span>
          </a>
          <form class="d-flex lg" role="search">
            <input
              class="form-control sm-2"
              type="search"
              placeholder="Buscar 🔍"
              aria-label="Search"
              style="text-align: right"
            />
          </form>
        </div>
      </nav>
    `;

  document.querySelector("header").innerHTML = navbarHTML;
}

document.addEventListener("DOMContentLoaded", renderNavbar);
