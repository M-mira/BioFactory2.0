// Переключение страниц
        function showPage(pageId) {
            // Скрываем все страницы
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Показываем выбранную страницу
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
            }

            // Обновляем активный пункт меню
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('onclick').includes(pageId)) {
                    link.classList.add('active');
                }
            });

            // Закрываем мобильное меню
            document.getElementById('main-nav').classList.remove('active');

            // Плавный скролл вверх
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

       
        // Мобильное меню
        function toggleMenu() {
            const nav = document.getElementById('main-nav');
            nav.classList.toggle('active');
        }

        // Показать главную страницу при загрузке
        window.onload = function() {
            showPage('home');
        };