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

// Toggle between Top 15 Mens and Top 15 Womens Players
// Flags: https://www.wtatennis.com/resources/v6.51.5/i/elements/flags/usa.svg

 const mensTop15 = [
    {
        "headshot": "./headshots/sinner-headshot.png",
        "first-name": "Jannik",
        "last-name": "Sinner",
        "country": "ITA",
        "age": 23,
        "rank": 1
    },
    {
        "headshot": "./headshots/alcaraz-headshot.jpg",
        "first-name": "Carlos",
        "last-name": "Alcaraz",
        "country": "ESP",
        "age": 22,
        "rank": 2
    },
    {
        "headshot": "./headshots/zverev-headshot.jpg",
        "first-name": "Alexander",
        "last-name": "Zverev",
        "country": "GER",
        "age": 28,
        "rank": 3
    },
    {
        "headshot": "./headshots/fritz-headshot.png",
        "first-name": "Taylor",
        "last-name": "Fritz",
        "country": "USA",
        "age": 28,
        "rank": 4
    },
    {
        "headshot": "./headshots/draper-headshot.png",
        "first-name": "Jack",
        "last-name": "Draper",
        "country": "GBR",
        "age": 23,
        "rank": 5
    },
    {
        "headshot": "./headshots/djokovic-headshot.png",
        "first-name": "Novak",
        "last-name": "Djokovic",
        "country": "SRB",
        "age": 38,
        "rank": 6
    },
    {
        "headshot": "./headshots/musetti-headshot.png",
        "first-name": "Lorenzo",
        "last-name": "Musetti",
        "country": "ITA",
        "age": 23,
        "rank": 7
    },
    {   
        "headshot": "./headshots/rune-headshot.png",
        "first-name": "Holger",
        "last-name": "Rune",
        "country": "DEN",
        "age": 22,
        "rank": 8
    },
    {
        "headshot": "./headshots/shelton-headshot.png",
        "first-name": "Ben",
        "last-name": "Shelton",
        "country": "USA",
        "age": 22,
        "rank": 9
    },
    {
        "headshot": "./headshots/rublev-headshot.png",
        "first-name": "Andrey",
        "last-name": "Rublev",
        "country": "RUS",
        "age": 27,
        "rank": 10
    },
    {
        "headshot": "./headshots/tiafoe-headshot.png",
        "first-name": "Frances",
        "last-name": "Tiafoe",
        "country": "USA",
        "age": 27,
        "rank": 11
    },
    {
        "headshot": "./headshots/de-minaur-headshot.jpg",
        "first-name": "Alex",
        "last-name": "de Minaur",
        "country": "AUS",
        "age": 26,
        "rank": 12
    },
    {
        "headshot": "./headshots/rudd-headshot.png",
        "first-name": "Casper",
        "last-name": "Rudd",
        "country": "NOR",
        "age": 26,
        "rank": 13
    },
    {
        "headshot": "./headshots/medvedev-headshot.png",
        "first-name": "Daniil",
        "last-name": "Medvedev",
        "country": "RUS",
        "age": 29,
        "rank": 14
    },
    {
        "headshot": "./headshots/fils-headshot.png",
        "first-name": "Arthur",
        "last-name": "Fils",
        "country": "FRA",
        "age": 21,
        "rank": 15
    }
]

const womensTop15 = [
    {
        "headshot": "./headshots/sabalenka-headshot.png",
        "first-name": "Aryna",
        "last-name": "Sabalenka",
        "country": "BLR",
        "age": 27,
        "rank": 1
    },
    {
        "headshot": "./headshots/gauff-headshot.png",
        "first-name": "Coco",
        "last-name": "Gauff",
        "country": "USA",
        "age": 21,
        "rank": 2
    },
    {   
        "headshot": "./headshots/swiatek-headshot.png",
        "first-name": "Iga",
        "last-name": "Świątek",
        "country": "POL",
        "age": 28,
        "rank": 3
    },
    {   
        "headshot": "./headshots/pegula-headshot.png",
        "first-name": "Jessica",
        "last-name": "Pegula",
        "country": "USA",
        "age": 31,
        "rank": 4
    },
    {
        "headshot": "./headshots/andreeva-headshot.png",
        "first-name": "Mirra",
        "last-name": "Andreeva",
        "country": "RUS",
        "age": 18,
        "rank": 5
    },
    {
        "headshot": "./headshots/zheng-headshot.png",
        "first-name": "Qinweng",
        "last-name": "Zheng",
        "country": "CHN",
        "age": 22,
        "rank": 6
    },
    {
        "headshot": "./headshots/anisimova-headshot.png",
        "first-name": "Amanda",
        "last-name": "Anisimova",
        "country": "USA",
        "age": 23,
        "rank": 7
    },
    {
        "headshot": "./headshots/keys-headshot.png",
        "first-name": "Madison",
        "last-name": "Keys",
        "country": "USA",
        "age": 30,
        "rank": 8
    },
    {
        "headshot": "./headshots/paolini-headshot.png",
        "first-name": "Jasmine",
        "last-name": "Paolini",
        "country": "ITA",
        "age": 29,
        "rank": 9
    },
    {
        "headshot": "./headshots/badosa-headshot.png",
        "first-name": "Paula",
        "last-name": "Badosa",
        "country": "ESP",
        "age": 27,
        "rank": 10
    },
    {
        "headshot": "./headshots/navarro-headshot.png",
        "first-name": "Emma",
        "last-name": "Navarro",
        "country": "USA",
        "age": 24,
        "rank": 11
    },
    {
        "headshot": "./headshots/muchova-headshot.jpeg",
        "first-name": "Karolina",
        "last-name": "Muchova",
        "country": "CZE",
        "age": 28,
        "rank": 12
    },
    {
        "headshot": "./headshots/rybakina-headshot.png",
        "first-name": "Elena",
        "last-name": "Rybakina",
        "country": "KAZ",
        "age": 26,
        "rank": 13
    },
    {
        "headshot": "./headshots/svitolina-headshot.png",
        "first-name": "Elina",
        "last-name": "Svitolina",
        "country": "UKR",
        "age": 30,
        "rank": 14
    },
    {
        "headshot": "./headshots/shnaider-headshot.png",
        "first-name": "Diana",
        "last-name": "Shnaider",
        "country": "RUS",
        "age": 21,
        "rank": 15
    }
]

const top15Container = document.querySelector(".top-15");

const mensToggle = () => {
    top15Container.innerHTML = ""; // Clear existing content
    mensTop15.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.innerHTML = `
            <img src="${player.headshot}" alt="${player["first-name"]} ${player["last-name"]} headshot" class="headshot">
            <div class="player-info">
                <h3 class="player-name">${player["first-name"]} ${player["last-name"]} <span class="country">(${player.country})</span> <span class="flag"><img src="https://www.wtatennis.com/resources/v6.51.5/i/elements/flags/${player.country.toLowerCase()}.svg" alt="${player.country} flag" class="flag"></span></h3>
                <p class="player-rank"><b>Rank:</b> ${player.rank}</p>
                <p class="player-age"><b>Age:</b> ${player.age}</p>
            </div>
        `;
        top15Container.appendChild(playerDiv);
    });
}

const womensToggle = () => {
    top15Container.innerHTML = "";
    womensTop15.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.innerHTML = `
            <img src="${player.headshot}" alt="${player["first-name"]} ${player["last-name"]} headshot" class="headshot">
            <div class="player-info">
                <h3 class="player-name">${player["first-name"]} ${player["last-name"]} <span class="country">(${player.country})</span> <span class="flag"><img src="https://www.wtatennis.com/resources/v6.51.5/i/elements/flags/${player.country.toLowerCase()}.svg" alt="${player.country} flag" class="flag"></span></h3>
                <p class="player-rank"><b>Rank:</b> ${player.rank}</p>
                <p class="player-age"><b>Age:</b> ${player.age}</p>
            </div>
        `;
        top15Container.appendChild(playerDiv);
    });
}

const mensTop15btn = document.querySelector(".mens-top-15-btn");
mensTop15btn.addEventListener("click", mensToggle);

const womensTop15btn = document.querySelector(".womens-top-15-btn");
womensTop15btn.addEventListener("click", womensToggle);

