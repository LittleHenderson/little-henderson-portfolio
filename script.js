const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) {
      links.forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if(active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
    }});
  }, {rootMargin:'-15% 0px -55% 0px',threshold:0});
  sections.forEach(section => observer.observe(section));
}
document.getElementById('year').textContent = new Date().getFullYear();
