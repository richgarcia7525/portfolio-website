document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventdefault();
        document.querySelector(this.getAtrribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
      });
    });

    const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Fixed 'classlist' typo
    } else {
      entry.target.classList.remove('show');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section); // Fixed 'observer' to 'observe'
});
