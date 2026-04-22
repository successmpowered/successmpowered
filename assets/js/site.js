document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
  }

  const form = document.querySelector('form[data-intake]');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
      if (success) success.style.display = 'block';
      form.querySelector('.form-body').style.display = 'none';
    });
  }
});
