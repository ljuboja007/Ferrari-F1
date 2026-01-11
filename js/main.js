/*--------------------| 
   -Header
|--------------------*/

const sidebar = document.querySelector(".sidebar");

function showSidebar(uslov){
    if(sidebar) {
        sidebar.classList.toggle("show", uslov); 
    }
}

document.addEventListener("click", (klik) => {
    if (sidebar && !sidebar.contains(klik.target) && !klik.target.closest(".menu-button")){
        showSidebar(false);
    }
});

document.addEventListener("keydown", (klik) => {
    if (klik.key === "Escape"){
        showSidebar(false);
    }
});

const menuLinks = new Array(
    {call: "Home", path: "index.html" }, 
    {call: "Sport Cars", path: "sport.html" },
    {call: "Drivers", path: "drivers.html" },
    {call: "Autor", path: "about.html" },
    {call: "Download ZIP", path: "FerrariSajt.zip"}
);

function generateMeni(selector) {
  const container = document.querySelector(selector); 
  
  if (!container) return; 

  const putanja = window.location.pathname;

  let imeStranice = putanja.substring(putanja.lastIndexOf('/') + 1);
  if(imeStranice === "") imeStranice = "index.html";

  let sadrzaj = "";
  for (let link of menuLinks) {
    let activ = imeStranice === link.path ? "class='active'" : "";
    sadrzaj += `<li ${activ}><a href="${link.path}">${link.call}</a></li>`;
  }
  container.innerHTML = sadrzaj;
}

generateMeni(".bar ul");       
generateMeni(".sidebar ul");   
generateMeni(".footer-down ul");

const sidebarIcon = document.querySelector(".sidebar ul");
const barIcon = document.querySelector(".bar ul");

if(sidebarIcon) {
    sidebarIcon.insertAdjacentHTML("afterbegin", `<li onclick="showSidebar(false)"><a href="#" class="arrow"><i class="fa-solid fa-angle-left"></i></a></li>`);
}
if(barIcon) {
    barIcon.insertAdjacentHTML("beforeend", `<li class="menu-button" onclick="showSidebar(true)"><a href="#"><i class="fa-solid fa-bars"></i></a></li>`);
}

const sidebarLi = document.querySelectorAll(".bar ul li");
sidebarLi.forEach(li => {
    li.classList.add("hideOnMobile");
});


/*--------------------| 
   -Hero
|--------------------*/

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
    const heroImages = new Array(
        "images/F1.jpg",
        "images/F2.jpg",
        "images/F3.jpg"
    );

    const heroItems = document.querySelectorAll(".hero-item");

    heroItems.forEach((item, index) => {
        item.style.backgroundImage = `url(${heroImages[index]})`;
    });

    let i = 0;

    function slideHeroSlider(){
        heroItems.forEach(item => item.classList.remove("animate-text"));

        i++;
        if(i >= heroItems.length){
            i = 0;
        }

        heroSlider.style.transform = `translateX(-${i * 100}vw)`;

        const current = heroItems[i];
        void current.offsetWidth; 
        current.classList.add("animate-text");
    }

    setInterval(slideHeroSlider, 5000);
    
    if(heroItems.length > 0) {
        heroItems[0].classList.add("animate-text");
    }
}


/*--------------------| 
   -Card
|--------------------*/

const cardInfo1 = new Array(
    {title: "v6", subtitle: "engine" }, 
    {title: "1600 cc", subtitle: "total displacement" },
    {title: "4 mj", subtitle: "battery energy" },
    {title: "120 kw", subtitle: "mgu-k power" }
);

const cardInfo2 = new Array(
    {title: "15,000", subtitle: "maximum rpm" },
    {title: "80 mm", subtitle: "bore" },
    {title: "53 mm", subtitle: "stroke" },
    {title: "500 bar", subtitle: "direct injection (max)" }
);

function generateCard(cardHolder, cardArray){
    const holder = document.querySelector(cardHolder);
    
    if(holder) {
        let card = "";
        cardArray.forEach(item => {
            card += `
            <div class="card autoDisplay">
                <h2>${item.title}</h2>
                <h6>${item.subtitle}</h6>
            </div>
            `;
        })
        holder.innerHTML = card;
    }
}

generateCard("#card-hd1", cardInfo1);
generateCard("#card-hd2", cardInfo2);


/*--------------------| 
   -Drivers
|--------------------*/

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const driverSec = document.querySelector(".drivers-section");

if (left && right && driverSec) {
    left.addEventListener("mouseenter", () => {
      driverSec.classList.add("hover-left");
    });
    left.addEventListener("mouseleave", () => {
      driverSec.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
      driverSec.classList.add("hover-right");
    });
    right.addEventListener("mouseleave", () => {
      driverSec.classList.remove("hover-right");
    });
}

/*--------------------| 
   -News
|--------------------*/

const newsInfo = new Array(
    {
        date: "18 DEC 2025",
        category: "SCUDERIA",
        title: "SCUDERIA FERRARI HP RENEWS TECHNICAL PARTNERSHIP WITH OMR AUTOMOTIVE",
        img: "images/ferrari-news1.jpg"
    },
    {
        date: "09 DEC 2025",
        category: "SCUDERIA",
        title: "SCUDERIA FERRARI HP CLOSES THE 2025 SEASON WITH 270 LAPS",
        img: "images/ferrari-news2.jpg"
    },
    {
        date: "07 DEC 2025",
        category: "ABU DHABI GP",
        title: "THANKS TO THE TEAM FOR ALL THE HARD WORK AND THANKS TO THE TIFOSI!",
        img: "images/ferrari-news3.jpg"
    }
);

const museumInfo1 = new Array(
    {
        date: "30 APR 2026",
        category: "ITALY",
        title: "THE FERRARI MUSEUM",
        img: "images/museum1.jpg"
    },
    {
        date: "17 DEC 2026",
        category: "ITALY",
        title: "ROARING 50s",
        img: "images/museum2.jpg"
    },
    {
        date: "03 MAR 2026",
        category: "ITALY",
        title: "SCUDERIA FERRARI, THE COMPLITE HISTORY",
        img: "images/museum3.jpg"
    }
);

const museumInfo2 = new Array(
    {
        date: "28 AVG 2024",
        category: "ITALY",
        title: "FERRARI PODIUM",
        img: "images/museum4.jpg"
    },
    {
        date: "11 JAN 2026",
        category: "ITALY",
        title: "FERRARI MODERN",
        img: "images/museum5.jpg"
    },
    {
        date: "06 MAR 1997",
        category: "ITALY",
        title: "FERRARI CLASS",
        img: "images/museum6.jpg"
    }
);

function generateNews(selector, podaci) {
    const container = document.querySelector(selector);

    if (!container) return;

    let newsSadrzaj = "";
    
    podaci.forEach(item => {
        newsSadrzaj += `
            <div class="news-card">
                <div class="image-container">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="news-date-category">
                    <span class="news-date">${item.date}</span>
                    <span class="news-category">${item.category}</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
            </div>
        `;
    });

    container.innerHTML = newsSadrzaj;
}

generateNews("#news", newsInfo);
generateNews("#news-museum1", museumInfo1);
generateNews("#news-museum2", museumInfo2);

/*--------------------| 
   -Table
|--------------------*/

const tableBody = document.getElementById('table-body');

if (tableBody) {
    const standings = new Array(
    { country: 'Australia', date: '16 Mar', points: 5, code: 'au' },
    { country: 'China', date: '23 Mar', points: 12, code: 'cn' },
    { country: 'Japan', date: '06 Apr', points: 18, code: 'jp' },
    { country: 'Bahrain', date: '13 Apr', points: 22, code: 'bh' },
    { country: 'Saudi Arabia', date: '20 Apr', points: 21, code: 'sa' },
    { country: 'USA (Miami)', date: '04 May', points: 16, code: 'us' },
    { country: 'Emilia-Romagna', date: '18 May', points: 20, code: 'it' },
    { country: 'Monaco', date: '25 May', points: 28, code: 'mc' },
    { country: 'Spain', date: '01 Jun', points: 23, code: 'es' },
    { country: 'Canada', date: '15 Jun', points: 18, code: 'ca' },
    { country: 'Austria', date: '29 Jun', points: 27, code: 'at' },
    { country: 'Great Britain', date: '06 Jul', points: 12, code: 'gb' },
    { country: 'Belgium', date: '27 Jul', points: 26, code: 'be' },
    { country: 'Hungary', date: '03 Aug', points: 12, code: 'hu' },
    { country: 'Netherlands', date: '31 Aug', points: 0, code: 'nl' },
    { country: 'Italy', date: '07 Sep', points: 20, code: 'it' },
    { country: 'Azerbaijan', date: '21 Sep', points: 6, code: 'az' },
    { country: 'Singapore', date: '05 Oct', points: 12, code: 'sg' },
    { country: 'United States', date: '19 Oct', points: 36, code: 'us' },
    { country: 'Mexico', date: '26 Oct', points: 22, code: 'mx' },
    { country: 'Brazil', date: '09 Nov', points: 6, code: 'br' },
    { country: 'Las Vegas', date: '22 Nov', points: 16, code: 'us' },
    { country: 'Qatar', date: '30 Nov', points: 4, code: 'qa' },
    { country: 'Abu Dhabi', date: '07 Dec', points: 16, code: 'ae' }
);

    standings.forEach(race => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="gp">
                    <img src="https://flagcdn.com/w40/${race.code}.png" alt="${race.country}" class="flag-icon">
                    <span>${race.country}</span>
                </div>
            </td>
            <td>${race.date}</td>
            <td class="col-pts">${race.points}</td>
        `;
        tableBody.appendChild(row);
    });
}


/*--------------------| 
   -Social Icons 
|--------------------*/

let socialLinks = [
    { path : "https://www.instagram.com/", icon : "fa-brands fa-instagram" },
    { path : "https://www.facebook.com/", icon : "fa-brands fa-facebook-f" },
    { path : "https://www.twitter.com/", icon : "fa-brands fa-x-twitter" },
    { path : "https://www.linkedin.com/", icon : "fa-brands fa-linkedin-in" },
    { path : "https://www.youtube.com/", icon : "fa-brands fa-youtube" }
];

function generateSocials(socialHolder, socialArray){
    const holder = document.querySelector(socialHolder);

    if (holder) {
        let socials = "";
        socialArray.forEach(item => {
            socials +=`
            <a href="${item.path}" target="_blank"><i class="${item.icon}"></i></a>
            `;
        })
        holder.innerHTML = socials;
    }
}

generateSocials(".social-links", socialLinks);

/*--------------------| 
   -Forma
|--------------------*/

const bookingForm = document.getElementById('bookingForm');
const resultDiv = document.getElementById('bookingResult');

if (bookingForm) {

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const tourType = document.getElementById('tourType').value;
        const visitDate = document.getElementById('visitDate').value;
        const tickets = document.getElementById('tickets').value;

        const errorName = document.getElementById('errorName');
        const errorEmail = document.getElementById('errorEmail');
        const errorType = document.getElementById('errorType');
        const errorDate = document.getElementById('errorDate');

        errorName.textContent = "";
        errorEmail.textContent = "";
        errorType.textContent = "";
        errorDate.textContent = "";

        let isValid = true;

        const nameRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ\s]+([A-ZČĆŽŠĐ][a-zčćžšđ\s]+){1,3}$/;
        
        if (!nameRegex.test(fullName)) {
            errorName.textContent = "Please enter a valid name (letters only).";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailRegex.test(email)) {
            errorEmail.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (tourType === "") {
            errorType.textContent = "Please select a tour type.";
            isValid = false;
        }

        if(visitDate == ""){
            errorDate.textContent = "Please select a date"
            isValid = false;
        }

        if (visitDate !== "") {
            const selectedDate = new Date(visitDate);
            
            const today = new Date();

            selectedDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                errorDate.textContent = "Please select a date in the future.";
                isValid = false;
            }
        }

        if (isValid) {
            bookingForm.style.display = "none";
            resultDiv.style.display = "block";

            resultDiv.innerHTML = `
                <div class="success-card">
                    <h3>RESERVATION CONFIRMED!</h3>
                    <p>Thank you <strong>${fullName}</strong>, your request has been received.</p>
                    
                    <div class="ticket-details">
                        <p><strong>Tour:</strong> ${tourType}</p>
                        <p><strong>Date:</strong> ${visitDate}</p>
                        <p><strong>Tickets:</strong> ${tickets}</p>
                        <p><strong>Confirmation sent to:</strong> ${email}</p>
                    </div>
                    
                    <button onclick="location.reload()" class="submit-btn">BOOK ANOTHER</button>
                </div>
            `;
        }
    });
}

/*--------------------| 
   -Drivers Stats
|--------------------*/

const driversContainer = document.getElementById('drivers-container');

if (driversContainer) {
    
    const driversData = new Array(
        {
            name: "LEWIS HAMILTON",
            img: "images/ham.jpg",
            stats: new Array(
                { info: "Born", value: "07 Jan 1985" },
                { info: "Weight", value: "73 kg" },
                { info: "Height", value: "1.74 m" },
                { info: "Country", value: "UK" }
            ),
            positions: new Array(
                { info: "1st Places", value: 105 },
                { info: "2nd Places", value: 57 },
                { info: "3rd Places", value: 40 },
                { info: "Pole Pos.", value: 104 }
            ),
            highlights: new Array(
                { info: "Total Podiums", value: 202 },
                { info: "World Titles", value: 7 }
            )
        },
        {
            name: "CHARLES LECLERC",
            img: "images/lec.jpg",
            stats: new Array(
                { info: "Born", value: "16 Oct 1997" },
                { info: "Weight", value: "69 kg" },
                { info: "Height", value: "1.80 m" },
                { info: "Country", value: "Monaco" }
            ),
            positions: new Array(
                { info: "1st Places", value: 8 },
                { info: "2nd Places", value: 15 },
                { info: "3rd Places", value: 18 },
                { info: "Pole Pos.", value: 26 }
            ),
            highlights: new Array(
                { info: "Total Podiums", value: 41 },
                { info: "World Titles", value: 0 }
            )
        }
    );

    let sadrzaj = "";

    driversData.forEach(driver => {

        let driverInfo = "";
        driver.stats.forEach(stat => {
            driverInfo += `
                <div class="stat-box">
                    <h5>${stat.info}</h5>
                    <span>${stat.value}</span>
                </div>
            `;
        });

        let driverPosition = "";
        driver.positions.forEach(pos => {
            driverPosition += `
                <div class="stat-box">
                    <h5>${pos.info}</h5>
                    <span>${pos.value}</span>
                </div>
            `;
        });

        let driverPodiums = "";
        driver.highlights.forEach(high => {
            driverPodiums += `
                <div class="podium-stat">
                    <h2>${high.value}</h2>
                    <p>${high.info}</p>
                </div>
            `;
        });

        sadrzaj += `
            <div class="driver-card">
                <div class="driver-img">
                    <img src="${driver.img}" alt="${driver.name}">
                </div>
                <div class="driver-data">
                    <h2 class="driver-name">${driver.name}</h2>
                    
                    <div class="stats-block">
                        ${driverInfo}
                    </div>

                    <div class="stats-block st-b">
                        ${driverPosition}
                    </div>

                    <div class="stats-block">
                        ${driverPodiums}
                    </div>
                </div>
            </div>
        `;
    });

    driversContainer.innerHTML = sadrzaj;
}

