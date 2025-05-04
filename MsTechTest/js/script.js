document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerNav = document.querySelector('.header__nav');

    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            headerNav.classList.toggle('active');
        });
    }

    // Закрытие меню при клике на пункт
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (window.innerWidth <= 800) {
                mobileMenuBtn.classList.remove('active');
                headerNav.classList.remove('active');
            }
        });
    });

    // Десктопное поведение хедера
    if (window.innerWidth > 800) {
        const header = document.querySelector('.header');
        const startTransformPos = 50;
        const startStickyPos = 100;

        window.addEventListener('scroll', function() {
            const scrollPos = window.scrollY;

            if (scrollPos > startTransformPos) {
                header.classList.add('header--transformed');
                if (scrollPos >= startStickyPos) {
                    header.classList.add('header--sticky');
                } else {
                    header.classList.remove('header--sticky');
                }
            } else {
                header.classList.remove('header--transformed', 'header--sticky');
            }
        });
    }

    // Реакция на изменение размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const headerNav = document.querySelector('.header__nav');

            if (mobileMenuBtn && headerNav) {
                mobileMenuBtn.classList.remove('active');
                headerNav.classList.remove('active');
            }
        }
    });
});