 // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');
        mobileMenu.addEventListener('click', () => navLinks.classList.toggle('active'));
        // Highlight nav on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) header.style.background = 'rgba(13, 17, 23, 0.98)';
            else header.style.background = 'rgba(13, 17, 23, 0.95)';
            // Highlight nav
            let sections = document.querySelectorAll('section');
            let navItems = document.querySelectorAll('.nav-links a');
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            sections.forEach(sec => {
                if (
                    sec.offsetTop - 130 <= scrollPos &&
                    sec.offsetTop + sec.offsetHeight - 130 > scrollPos
                ) {
                    navItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').replace('#', '') === sec.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        // Animate elements on scroll
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        document.querySelectorAll('.project-card, .skill-category, .stat-card, .contact-item, .timeline-item, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.7s cubic-bezier(.25,.8,.25,1), transform 0.7s cubic-bezier(.25,.8,.25,1)';
            observer.observe(el);
        });
        // Add typing effect to hero title
        const heroTitle = document.querySelector('.hero h1');
        const titleText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < titleText.length) {
                heroTitle.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 90);
            }
        }
        window.addEventListener('load', () => setTimeout(typeWriter, 500));
