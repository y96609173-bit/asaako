/**
 * ASASKO MAX — Services Interactive Preview Component
 * Handles seamless image crossfading and editorial row state on hover & keyboard focus.
 */

document.addEventListener('DOMContentLoaded', () => {
  const serviceRows = document.querySelectorAll('.service-row');
  const previewImgs = document.querySelectorAll('.service-preview-img');
  const visualTag = document.querySelector('.services-visual-tag');

  const tags = {
    'painting': 'معاينة: الدهانات الداخلية والخارجية',
    'epoxy': 'معاينة: أرضيات الإيبوكسي',
    'facade': 'معاينة: الواجهات والبروفايل'
  };

  function activateService(row) {
    if (!row) return;
    const targetService = row.getAttribute('data-service');

    // Update active state on rows
    serviceRows.forEach(r => {
      const isTarget = (r === row);
      r.classList.toggle('is-active', isTarget);
      r.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });

    // Update active preview image with crossfade
    previewImgs.forEach(img => {
      const imgService = img.getAttribute('data-service');
      img.classList.toggle('is-active', imgService === targetService);
    });

    // Update subtle tag label
    if (visualTag && tags[targetService]) {
      visualTag.textContent = tags[targetService];
    }
  }

  serviceRows.forEach(row => {
    // Mouse hover
    row.addEventListener('mouseenter', () => {
      activateService(row);
    });

    // Keyboard focus navigation
    row.addEventListener('focus', () => {
      activateService(row);
    });

    // Touch / Click toggle
    row.addEventListener('click', (e) => {
      // If clicking directly on the inner link, let the link navigate
      if (e.target.closest('.service-link')) return;
      activateService(row);
    });
  });
});
