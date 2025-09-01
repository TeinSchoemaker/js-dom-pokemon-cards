const container = document.querySelector(".cards");

function drawPokemans() {
  container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const poke = data[i];

    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card--title");
    title.textContent = poke.name
      ? poke.name[0].toUpperCase() + poke.name.slice(1)
      : "Unknown";

    const image = document.createElement("img");
    image.classList.add("card--img");
    image.width = 256;
    image.src =
      poke.sprites?.other?.["official-artwork"]?.front_default ||
      poke.sprites?.front_default ||
      "";

    const stats = document.createElement("ul");
    stats.classList.add("card--text");

    for (let j = 0; j < poke.stats.length; j++) {
      const item = document.createElement("li");
      item.innerHTML = `${poke.stats[j].stat.name.toUpperCase()}: ${
        poke.stats[j].base_stat
      }`;
      stats.appendChild(item);
    }

    const gamesTitle = document.createElement("h3");
    gamesTitle.classList.add("card--subtitle");
    gamesTitle.textContent = "Game appearances";

    const gamesList = document.createElement("ul");
    gamesList.classList.add("card--games-list");

    poke.game_indices.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = entry.version.name;
      gamesList.appendChild(li);
    });

    card.append(title);
    card.append(image);
    card.append(stats);
    card.append(gamesTitle);
    card.append(gamesList);

    container.append(card);
  }
}

drawPokemans();
