const legalLinks = [
  { href: "/legal/aviso-legal.html", label: "Aviso legal" },
  { href: "/privacy", label: "Privacidad" },
  { href: "/legal/cookies.html", label: "Cookies" },
  { href: "/legal/terminos.html", label: "Términos de uso" },
];

class IQHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="site-header__inner">
          <a class="wordmark" href="/" aria-label="iQFeeDex, inicio"><span class="wordmark__iq">iQ</span><span>FeeDex</span><i></i></a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
            <span class="menu-toggle__label">Menú</span><span class="menu-toggle__icon" aria-hidden="true"><i></i><i></i></span>
          </button>
          <nav class="site-nav" id="primary-navigation" aria-label="Navegación principal">
            <a href="/#enfoque">Nosotros</a>
            <a href="/#servicios">Qué hacemos</a>
            <a href="/productos/seresta.html">Productos</a>
            <a href="/#contacto">Contacto</a>
            <a class="site-nav__cta" href="/#contacto">Hablemos <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>`;
  }
}

class IQFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__main">
          <div class="site-footer__brand">
            <a class="wordmark wordmark--footer" href="/" aria-label="iQFeeDex, inicio"><span class="wordmark__iq">iQ</span><span>FeeDex</span><i></i></a>
            <p>Estudio de desarrollo de software y soluciones tecnológicas. Creamos productos propios y colaboramos como socios de tu equipo.</p>
            <p>iQFeeDex es la marca de Johan Felipe Pabon Garcia, persona natural.</p>
          </div>
          <div class="site-footer__column">
            <span class="site-footer__label">EXPLORA</span>
            <a href="/#enfoque">Nuestra manera</a>
            <a href="/#servicios">Servicios</a>
            <a href="/productos/seresta.html">SERESTA</a>
            <a href="/#contacto">Hablemos</a>
          </div>
          <div class="site-footer__column">
            <span class="site-footer__label">CONTACTO</span>
            <a href="mailto:Jfelipepabong@gmail.com">Jfelipepabong@gmail.com</a>
            <a href="tel:+573207792998">+57 320 779 2998</a>
            <span>Colombia · Trabajo remoto</span>
          </div>
        </div>
        <div class="site-footer__bottom">
          <span>© <span data-current-year></span> iQFeeDex. Hecho con intención.</span>
          <nav class="site-footer__legal" aria-label="Información legal">
            ${legalLinks.map(({ href, label }) => `<a href="${href}">${label}</a>`).join("")}
          </nav>
          <a class="back-top" href="#top" aria-label="Volver arriba">↑</a>
        </div>
      </footer>`;
    this.insertAdjacentHTML("beforeend", `
      <a class="whatsapp-float" href="https://wa.me/573207792998?text=Hola%2C%20quiero%20hablar%20sobre%20un%20proyecto%20de%20software."
        target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp; abre una nueva pestaña" title="Escríbenos por WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.1 11.8a8.1 8.1 0 0 1-12 7l-4 .9 1.1-3.8a8.1 8.1 0 1 1 14.9-4.1Z"></path>
          <path d="M9.1 8.1c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.4 2.1 1.9.3.1.5.1.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.5 0 .5-.3 1-.6 1.3-.5.5-1.2.6-1.9.4-1-.3-2.4-.9-3.8-2.2-1.1-1.1-1.8-2.4-2.1-3.2-.3-.8 0-1.5.5-2Z"></path>
        </svg>
      </a>`);
  }
}

if (!customElements.get("iq-header")) customElements.define("iq-header", IQHeader);
if (!customElements.get("iq-footer")) customElements.define("iq-footer", IQFooter);
