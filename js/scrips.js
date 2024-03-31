class MobileNavbar {
    constructor() {
      // Seleciona os elementos do DOM e define variáveis de estado
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active"; // Classe usada para indicar estado ativo
      this.handleCilck = this.handleCilck.bind(this); // Bind do método para manter o contexto correto
    }
  
    // Método para animar os links da navegação
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    // Método para lidar com o clique no ícone do menu
    handleCilck() {
      this.navList.classList.toggle(this.activeClass); // Adiciona/Remove a classe ativa à lista de navegação
      this.mobileMenu.classList.toggle(this.activeClass); // Adiciona/Remove a classe ativa ao ícone do menu
      this.animateLinks(); // Chama o método para animar os links
    }
  
    // Método para adicionar evento de clique ao ícone do menu
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleCilck);
    }
  
    // Método de inicialização
    init() {
      if (this.mobileMenu) {
        this.addClickEvent(); // Se o ícone do menu existir, adiciona o evento de clique
      }
      return this;
    }
  }
  
  // Instanciação da classe MobileNavbar com os seletores dos elementos do DOM
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu", // Seletor do ícone do menu
    ".nav-list", // Seletor da lista de navegação
    ".nav-list li" // Seletor dos itens da lista de navegação
  );
  
  mobileNavbar.init(); // Inicializa a funcionalidade do menu
  