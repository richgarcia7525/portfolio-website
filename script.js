document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventdefault();
        document.querySelector(this.getAtrribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
      });
    });
