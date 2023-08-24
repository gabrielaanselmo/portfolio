function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    (rect.top <= window.innerHeight && rect.bottom >= 0) ||
    (rect.bottom >= 0 && rect.top <= 0)
  );
}

function handleScroll() {
  const elementsToShow = document.querySelectorAll('.hidden');

  elementsToShow.forEach(element => {
    if (isElementVisible(element)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
  handleScroll();
});
