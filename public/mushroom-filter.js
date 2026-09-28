const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

seasonFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const seasonMatches = season === currentFilters.season;
    const edibleMatches = edible === currentFilters.edible;
    const isSeasonMatch = seasonMatches || currentFilters.season === "all";
    const isEdibleMatch = edibleMatches || currentFilters.edible === "all";

    if (isSeasonMatch && isEdibleMatch) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultMessage.hidden = true;
    } else {
      noResultMessage.hidden = false;
    }
  });
}

function enableFitlering() {
  seasonFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFitlering();
