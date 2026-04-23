document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
  }

  const form = document.querySelector('form[data-intake]');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      try {
        const res = await fetch('https://formspree.io/f/mvzdvjyl', {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          const success = form.querySelector('.form-success');
          form.querySelector('.form-body').style.display = 'none';
          if (success) success.style.display = 'block';
        } else {
          if (btn) { btn.disabled = false; btn.innerHTML = 'Send <span class="arrow">→</span>'; }
          alert('Something went wrong. Please email us directly at team@successmpowered.com');
        }
      } catch (err) {
        if (btn) { btn.disabled = false; btn.innerHTML = 'Send <span class="arrow">→</span>'; }
        alert('Something went wrong. Please email us directly at team@successmpowered.com');
      }
    });
  }
});
