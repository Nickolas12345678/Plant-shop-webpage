const themeToggleButton = document.getElementById("theme-toggle");


const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.body.setAttribute("data-theme", currentTheme);
}

themeToggleButton.addEventListener("click", () => {
    let theme = document.body.getAttribute("data-theme");


    if (theme === "dark") {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙";
    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "☀️";
    }
});

