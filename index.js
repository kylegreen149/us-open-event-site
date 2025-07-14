const themeToggle = document.querySelector(".theme-toggle");
// console.log(themeToggle);

const body = document.querySelector("body")

const logoImg = document.querySelector(".page-info-header img");

const updateImage = () => {
    if (body.classList.contains("dark-theme")) {
        logoImg.src = logoImg.getAttribute("data-dark");
        
    } else {
        logoImg.src = logoImg.getAttribute("data-light");
    }
};

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
    updateImage()
};

themeToggle.addEventListener("click", changeTheme)
