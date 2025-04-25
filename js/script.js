// COMPORTAMENTO DA NAVBAR

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// INFORMATIVOS DINÂMICOS

const cardData = [
    {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    }, {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    }, {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    }, {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    }, {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    }, {
        title: "Edital concurso de monitoria - Edital 02.2025",
        date: "10 de março de 2025",
        location: "Faculdade Mineira de Direito",
        tag: "Novidades",
        link: "https://fmd.pucminas.br/edital-concurso-de-monitoria-edital-02-2025/"
    },
];

const container = document.getElementById("card-container");
const quantidade = 9;

for (let i = 0; i < quantidade; i++) {
    const info = cardData[0];
    container.innerHTML += `
      <div class="col-12 col-md-6 col-xxl-4 pb-4 card-mobile">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title fw-bold">${info.title}</h3>
            <ul>
              <li><a href="#"><i class="bi bi-calendar"></i> ${info.date}</a></li>
              <li><a href="#"><i class="bi bi-building"></i> ${info.location}</a></li>
              <li><a href="#"><i class="bi bi-star"></i> ${info.tag}</a></li>
            </ul>
            <a href="${info.link}" class="btn">Continuar <i class="bi bi-chevron-right"></i></a>
          </div>
        </div>
      </div>
    `;
}

// BOTÃO QUE RETORNA AO INÍCIO

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});