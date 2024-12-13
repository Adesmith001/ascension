document.getElementById('close-menu').addEventListener('click', () => {
    document.querySelector('[role="dialog"]').remove();
    document.querySelector('.fixed').remove();
  });