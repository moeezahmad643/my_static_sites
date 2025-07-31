document.addEventListener('DOMContentLoaded', function () {
            const navIcon = document.querySelector('.nav-icon');
            const navLinks = document.querySelector('nav ul');

            navIcon.addEventListener('click', function () {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                    navIcon.innerHTML = '<i class="bi bi-list"></i>';
                } else {
                    navIcon.innerHTML = '<i class="bi bi-x"></i>';
                    navLinks.style.display = 'flex';
                }
            });
        });

        window.addEventListener('resize', function () {
            const navLinks = document.querySelector('nav ul');
            const navIcon = document.querySelector('.nav-icon');

            if (window.innerWidth > 900) {
                navLinks.style.display = 'flex';
                navIcon.style.display = 'none';
            } else {
                navLinks.style.display = 'none';
                navIcon.style.display = 'block';
            }
        });