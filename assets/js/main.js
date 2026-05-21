(function () {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    const curYear = new Date().getFullYear();
    if (yearSpan && curYear > 2026) {
        yearSpan.textContent = ` - {curYear}`;
    }
})();
