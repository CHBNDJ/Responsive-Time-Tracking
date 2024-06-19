// Utilisation de await à l'intérieur de la fonction asynchrone
const response = await fetch('data.json');
const stats = await response.json();

  const imageMapping = {
        "Work": "./images/work.svg",
        "Play": "./images/play.svg",
        "Study": "./images/study.svg",
        "Exercise": "./images/exercise.svg",
        "Social": "./images/social.svg",
        "Self Care": "./images/self-care.svg"
    };


const sectionCards = document.querySelector(".cards-container");

    stats.forEach((item, i) => {
        // Création d'un conteneur pour la carte et l'image
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");

        // Création de l'image dédiée à une carte
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("card-img",`card-img-${i + 1}`);
        const imgElement = document.createElement("img");
        imgElement.src = imageMapping[item.title];
        imgElement.alt = `${item.title} picture`;
        imgContainer.appendChild(imgElement);

        // Création d’une balise dédiée à une carte
        const cardElement = document.createElement("article");
        cardElement.classList.add("card", `card-${i + 1}`);

        // Création des balises
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");
        cardElement.appendChild(titleContainer);


        const titleElement = document.createElement("h1");
        titleElement.innerText = item.title;
        titleContainer.appendChild(titleElement);


        const iconElement = document.createElement("i");
        iconElement.classList.add("fas", "fa-ellipsis");
        titleContainer.appendChild(iconElement);
        

        const dailyElement = document.createElement("div");
        dailyElement.classList.add("timeframe", "Daily");
        dailyElement.innerHTML = `<p class="current">${item.timeframes.daily.current}hrs</p><p class="previous">Last Day - ${item.timeframes.daily.previous}hrs</p>`;

        const weeklyElement = document.createElement("div");
        weeklyElement.classList.add("timeframe", "Weekly");
        weeklyElement.innerHTML = `<p class="current">${item.timeframes.weekly.current}hrs</p><p class="previous">Last Week - ${item.timeframes.weekly.previous}hrs</p>`;

        const monthlyElement = document.createElement("div");
        monthlyElement.classList.add("timeframe", "Monthly");
        monthlyElement.innerHTML = `<p class="current">${item.timeframes.monthly.current}hrs</p><p class="previous">Last Month - ${item.timeframes.monthly.previous}hrs</p>`;

        // Ajout des éléments à la carte
       
        cardElement.appendChild(dailyElement);
        cardElement.appendChild(weeklyElement);
        cardElement.appendChild(monthlyElement);

        // Ajout de l'image et de la carte au conteneur
        cardWrapper.appendChild(imgContainer);
        cardWrapper.appendChild(cardElement);
        sectionCards.appendChild(cardWrapper);
    });




document.querySelectorAll(".card-profil p").forEach(element => {
  element.addEventListener("click", (e) => {
    const timeframe = e.target.textContent;
    updateTimeframes(timeframe);
  });
});

// Afficher les données par défaut (daily)
updateTimeframes("Weekly");

function updateTimeframes(timeframe) {
  document.querySelectorAll(".card").forEach(card => {
    card.querySelectorAll(".Daily, .Weekly, .Monthly").forEach(elem => {
      elem.style.display = "none";
    });
    card.querySelector(`.${timeframe}`).style.display = "block";
  });
}









