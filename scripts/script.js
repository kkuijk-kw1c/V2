document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Sluitknop logica
      if (e.target.closest('.card-close')) {
        e.stopPropagation();
        card.classList.remove('is-expanded');
        return;
      }

      // Check of de kaart al open is
      const isOpen = card.classList.contains('is-expanded');

      // Sluit alle andere kaarten
      cards.forEach(c => c.classList.remove('is-expanded'));

      // Open deze kaart
      if (!isOpen) {
        card.classList.add('is-expanded');
        
        // Scroll de kaart zachtjes in beeld na een kleine vertraging
        setTimeout(() => {
          card.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 300);
      }
    });
  });
});