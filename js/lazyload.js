function lazyLoad() {
  const lazyImages = document.querySelectorAll('.lazy');

  lazyImages.forEach((lazyImage) => {
    if (lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImage).display !== 'none') {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
    }
  });
}

window.addEventListener('load', lazyLoad);

window.addEventListener('scroll', lazyLoad);