/* 
 * PontoCego Security - Page Loader
 * Full-screen logo animation on every page load
 */

function showLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
}

function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1000);
  }
}

window.addEventListener('load', hideLoader);

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="./"], a[href^="../"], a[href^="index"], a[href^="services"], a[href^="about"], a[href^="team"], a[href^="contact"], a[href^="privacy"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
        showLoader();
      }
    });
  });
});
