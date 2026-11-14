const cases = [...document.querySelectorAll('.case')];

const setOpenCase = (activeCase) => {
  cases.forEach((item) => {
    const isOpen = item === activeCase;
    item.classList.toggle('is-open', isOpen);
    item.setAttribute('aria-expanded', String(isOpen));
  });
};

cases.forEach((item) => {
  item.addEventListener('click', () => setOpenCase(item));
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenCase(item);
    }
  });
});

const meter = document.querySelector('.scroll-meter span');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  meter.style.height = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });
