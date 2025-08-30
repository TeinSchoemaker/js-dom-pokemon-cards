
const container = document.querySelector(".cards");

function drawPokemans() {
    container.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const poke = data[i];

    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card--title");

    const image = document.createElement("img");
    image.classList.add("card--img");
    image.width = 256;
    image.src = data[i].sprites.other["official-artwork"].front_default;

    const stats = document.createElement("ul");
    stats.classList.add("card--text");

    for (let j = 0; j < data[i].stats.length; j++) {
      const item = document.createElement("li");
      item.innerHTML = `${data[i].stats[j].stat.name.toUpperCase()}: ${
        data[i].stats[j].base_stat
      }`;
      stats.appendChild(item);
    }

    card.append(title);
    card.append(image);
    card.append(stats);
    
    container.append(card);
  }
}

drawPokemans();
