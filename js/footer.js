function renderFooter() {
    const footerHTML = `
       <div class="footer-first-row">
        <img src="./img/logo-chico.png" alt="Logo" style="height: 70px" />
        <div class="footer-links">
          <a href="../ordena_pedido.html">Reserva</a>
          <a href="../menu.html">Mira nuestro Menu</a>
          <a href="../faq.html">FAQ</a>
          <a href="#">Boton de arrepentimiento</a>
        </div>
        <div class="footer-social">
          <a href="https://www.instagram.com"><img style="height: 35px;" src="svg/Instagram_white.svg" alt="Instagram"></a>
          <a href="https://www.facebook.com"><img style="height: 35px;" src="svg/Facebook_white.svg" alt="Facebook"></a>
          <a href="https://www.twitter.com"><img style="height: 35px;" src="svg/Twitter_white.svg" alt="Twitter"></a>
        </div>
      </div>
      
      <p class="footer-copy">
        © 2024 BurgerLab. Todos los derechos reservados.
        <a href="#">Politicas de privacidad</a> |
        <a href="#">Terminos del servicio</a>
      </p>
      <p class="footer-copy">
        Creado por <span class="span-creadores">Joaquin Fernandes, Ignacio Ramirez, Guido Contartese, Lucas Vitale y Andrea </span>
      </p>
      `;
  
    document.querySelector("#footer").innerHTML = footerHTML;
  }
  
  document.addEventListener("DOMContentLoaded", renderFooter);