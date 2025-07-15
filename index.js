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
        "first-name": "Jannik",
        "last-name": "Sinner",
        "country": "ITA",
        "flag": "🇮🇹",
        "age": 23,
        "rank": 1
    },
    {
        "first-name": "Carlos",
        "last-name": "Alcaraz",
        "country": "ESP",
        "flag": "🇪🇸",
        "age": 22,
        "rank": 2
    },
    {
        "first-name": "Alexander",
        "last-name": "Zverev",
        "country": "GER",
        "flag": "🇩🇪",
        "age": 28,
        "rank": 3
    },
    {
        "first-name": "Taylor",
        "last-name": "Fritz",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 28,
        "rank": 4
    },
    {
        "first-name": "Jack",
        "last-name": "Draper",
        "country": "GBR",
        "flag": "🇬🇧",
        "age": 23,
        "rank": 5
    },
    {
        "first-name": "Novak",
        "last-name": "Djokovic",
        "country": "SRB",
        "flag": "🇷🇸",
        "age": 38,
        "rank": 6
    },
    {
        "first-name": "Lorenzo",
        "last-name": "Musetti",
        "country": "ITA",
        "flag": "🇮🇹",
        "age": 23,
        "rank": 7
    },
    {
        "first-name": "Holger",
        "last-name": "Rune",
        "country": "DEN",
        "flag": "🇩🇰",
        "age": 22,
        "rank": 8
    },
    {
        "first-name": "Ben",
        "last-name": "Shelton",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 22,
        "rank": 9
    },
    {
        "first-name": "Andrey",
        "last-name": "Rublev",
        "country": "RUS",
        "flag": "🇷🇺",
        "age": 27,
        "rank": 10
    },
    {
        "first-name": "Frances",
        "last-name": "Tiafoe",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 27,
        "rank": 11
    },
    {
        "first-name": "Alex",
        "last-name": "de Minaur",
        "country": "AUS",
        "flag": "🇦🇺",
        "age": 26,
        "rank": 12
    },
    {
        "first-name": "Casper",
        "last-name": "Rudd",
        "country": "NOR",
        "flag": "🇳🇴",
        "age": 26,
        "rank": 13
    },
    {
        "first-name": "Daniil",
        "last-name": "Medvedev",
        "country": "RUS",
        "flag": "🇷🇺",
        "age": 29,
        "rank": 14
    },
    {
        "first-name": "Arthur",
        "last-name": "Fils",
        "country": "FRA",
        "flag": "🇫🇷",
        "age": 21,
        "rank": 15
    }
]

const womensTop15 = [
    {
        "first-name": "Aryna",
        "last-name": "Sabalenka",
        "country": "BLR",
        "flag": "🇧🇾",
        "age": 27,
        "rank": 1
    },
    {
        "first-name": "Coco",
        "last-name": "Gauff",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 21,
        "rank": 2
    },
    {
        "first-name": "Iga",
        "last-name": "Świątek",
        "country": "POL",
        "flag": "🇵🇱",
        "age": 28,
        "rank": 3
    },
    {
        "first-name": "Jessica",
        "last-name": "Pegula",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 31,
        "rank": 4
    },
    {
        "first-name": "Mirra",
        "last-name": "Andreeva",
        "country": "RUS",
        "flag": "🇷🇺",
        "age": 18,
        "rank": 5
    },
    {
        "first-name": "Qinweng",
        "last-name": "Zheng",
        "country": "CHN",
        "flag": "🇨🇳",
        "age": 22,
        "rank": 6
    },
    {
        "first-name": "Amanda",
        "last-name": "Anisimova",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 23,
        "rank": 7
    },
    {
        "first-name": "Madison",
        "last-name": "Keys",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 30,
        "rank": 8
    },
    {
        "first-name": "Jasmine",
        "last-name": "Paolini",
        "country": "ITA",
        "flag": "🇮🇹",
        "age": 29,
        "rank": 9
    },
    {
        "first-name": "Paula",
        "last-name": "Badosa",
        "country": "ESP",
        "flag": "🇪🇸",
        "age": 27,
        "rank": 10
    },
    {
        "first-name": "Emma",
        "last-name": "Navaro",
        "country": "USA",
        "flag": "🇺🇸",
        "age": 24,
        "rank": 11
    },
    {
        "first-name": "Karolina",
        "last-name": "Muchova",
        "country": "CZE",
        "flag": "🇨🇿",
        "age": 28,
        "rank": 12
    },
    {
        "first-name": "Elena",
        "last-name": "Rybakina",
        "country": "KAZ",
        "flag": "🇰🇿",
        "age": 26,
        "rank": 13
    },
    {
        "first-name": "Elina",
        "last-name": "Svitolina",
        "country": "UKR",
        "flag": "🇺🇦",
        "age": 30,
        "rank": 14
    },
    {
        "first-name": "Diana",
        "last-name": "Shnaider",
        "country": "RUS",
        "flag": "🇷🇺",
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
            <img src="https://www.wtatennis.com/resources/v6.51.5/i/elements/flags/${player.country.toLowerCase()}.svg" alt="${player.country} flag">
            <h3>${player["first-name"]} ${player["last-name"]}</h3>
            <p>Rank: ${player.rank}</p>
            <p>Age: ${player.age}</p>
        `;
        top15Container.appendChild(playerDiv);
    });
}

const womensToggle = () => {
    top15Container.innerHTML = ""; // Clear existing content
    womensTop15.forEach(player => {
        const playerDiv = document.createElement("div");
        playerDiv.classList.add("player");
        playerDiv.innerHTML = `
            <img src="https://www.wtatennis.com/resources/v6.51.5/i/elements/flags/${player.country.toLowerCase()}.svg" alt="${player.country} flag">
            <h3>${player["first-name"]} ${player["last-name"]}</h3>
            <p>Rank: ${player.rank}</p>
            <p>Age: ${player.age}</p>
        `;
        top15Container.appendChild(playerDiv);
    });
}

const mensTop15btn = document.querySelector(".mens-top-15-btn");
mensTop15btn.addEventListener("click", mensToggle);

const womensTop15btn = document.querySelector(".womens-top-15-btn");
womensTop15btn.addEventListener("click", womensToggle);

// for (player of mensTop15) {
//     console.log(player["first-name"] + " " + player["last-name"] + " from " + player.country + " is ranked #" + player.rank + " and is " + player.age + " years old.");
// }
// console.log("")
// for (player of womensTop15) {
//     console.log(player["first-name"] + " " + player["last-name"] + " from " + player.country + " is ranked #" + player.rank + " and is " + player.age + " years old.");
// }
