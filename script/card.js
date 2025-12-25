import { movieData } from "../data/card-data.js";

$(document).ready(() => {
  function createMovieCard(movie) {
    const badgeHtml = movie.badge
      ? `<div class="badge ${movie.badge.type}">${movie.badge.text}</div>` : "";

    const ratingHtml = movie.rating
      ? `<div class="rating">★ ${movie.rating}</div>` : "";

    return `
      <div class="movie-card">
        ${badgeHtml}
        <img src="${movie.image}" alt="${movie.title}" />
        <div class="movie-info">
          <h3>${movie.title}</h3>
          ${ratingHtml}
        </div>
      </div>
    `;
  }

  function createMovieSection(sectionId, movies) {
    const movieCards = movies.map((movie) => createMovieCard(movie)).join("");
    $(`#${sectionId} .movie-row`).html(movieCards);
  }

  createMovieSection("continuing-section", movieData.continuing);
  createMovieSection("top-rating-section", movieData.topRating);
  createMovieSection("trending-section", movieData.trending);
  createMovieSection("new-release-section", movieData.newRelease);

  // Function to bind events to movie cards
  function bindMovieCardEvents($cards) {
    $cards.off("mouseenter mouseleave click");
    $cards.hover(function () {
      $(this).find(".movie-info").fadeIn(200);
    });

    $cards.click(function () {
      const movieTitle = $(this).find("h3").text();
      alert(`Membuka detail untuk: ${movieTitle}`);
    });
  }

  bindMovieCardEvents($(".movie-card"));
});
