// ===== BOTÃO ☰ =====
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const nav = document.querySelector('nav');

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ===== MODAIS =====
document.querySelectorAll(".btn-leia-mais").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ===== ROLAGEM SUAVE =====
function smoothScroll(target, duration = 1000) {
  const element = document.querySelector(target);
  if (!element) return;

  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// ===== APLICAÇÃO DA ROLAGEM =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    // Se for o botão de destaque, usa rolagem mais lenta
    if (this.classList.contains("btn-destaque")) {
      smoothScroll(this.getAttribute("href"), 1000); // 1.5 segundos
    } else {
      smoothScroll(this.getAttribute("href"), 1200); // 1.2 segundos
    }
  });
});

// ===== MENU RESPONSIVO =====
menuToggle.addEventListener('click', () => {// Alterna a classe 'active' no nav
  nav.classList.toggle('active');// Alterna a visibilidade do menu
});

// Mostrar/esconder botão voltar ao topo
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Ação do botão voltar ao topo
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}
