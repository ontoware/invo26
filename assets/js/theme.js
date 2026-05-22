(function () {
    const body = document.body;
    const toggle = document.getElementById('themeToggle');
    const THEME_KEY = 'invo26_theme';

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('theme-dark');
            body.classList.remove('theme-light');
            toggle.textContent = "☀️";
        } else {
            body.classList.add('theme-light');
            body.classList.remove('theme-dark');
            toggle.textContent = "🌙";
        }
    }

    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
        applyTheme(saved);
    } else {
        applyTheme('light');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = body.classList.contains('theme-dark');
            const next = isDark ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem(THEME_KEY, next);
        });
    }
})();
