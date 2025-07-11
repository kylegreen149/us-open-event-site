const themeToggle = document.querySelector(".theme-toggle");
// console.log(themeToggle);

const body = document.querySelector("body")

const changeTheme = () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    if (body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Toggle Light Mode";
        console.log("DARK MODE!!");
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
        console.log("LIGHT MODE!!");
    }
};

themeToggle.addEventListener("click", changeTheme)
