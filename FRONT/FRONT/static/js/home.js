
        document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('section');

            function checkScroll() {
                sections.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const sectionBottom = section.getBoundingClientRect().bottom;

                    if (sectionTop < window.innerHeight / 2 && sectionBottom >= 0) {
                        section.style.opacity = '1';
                        section.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        section.style.opacity = '0';
                    }
                });
            }
            
            window.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);

            checkScroll(); // Initial check
        });
 