document.addEventListener("DOMContentLoaded", function () {
  getMovieData();
});

// ------ 변수(선택자) 선언부 ------
const searchBtn = document.querySelector(".searchBtn");
const cardContainer = document.querySelector(".cardContainer");
const searchText = document.querySelector(".searchText");
const cardItem = document.querySelector(".cardItem");
const searchcount = document.querySelector(".searchcount");
// const
// ------ 여기까지 선언부 ------

// ------ 카드 클릭 이벤트 ------

function cardClick() {
  alert(`영화 ID: ${this.getAttribute("cardId")}`);
}

// ------ 여기까지 카드 클릭 ------

// ------ 여기부터 검색 ------

// 클릭으로 검색
searchBtn.addEventListener("click", () => {
  let search = searchText.value.toLowerCase();
  moiveSearch(search);
});

// 엔터키로 검색.
searchText.addEventListener("keydown", (e) => {
  // e는 이벤트 종류
  if (e.keyCode === 13) {
    let search = searchText.value.toLowerCase();
    moiveSearch(search);
  }
});

function moiveSearch(search) {
  // cardContainer의 자식
  let searchTarget = [...cardContainer.children];
  // console.log(searchTarget[0]);
  let searching = searchTarget.filter((value) => {
    let searchList = value
      .getElementsByClassName("cardTitle")[0]
      .textContent.toLowerCase();
    console.log(searchList);
    if (searchList.indexOf(search) != "-1") {
      value.style.display = "block";
      return searchList;
    } else {
      value.style.display = "none";
    }
  });

  searchcount.textContent = `검색 결과: ${searching.length}`;
}

// ------ 여기까지 검색 ------

// ------ fetch, tmdb api ------
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWNlMTYzMDJiYjIxYWYxNjRkNjM1Y2NjZjNjNGE4ZSIsInN1YiI6IjY0NzQ4ZDM1NWNkMTZlMDBkYzNlOTVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSQ79jOPTs3KVTz2J-T2d5L8YSztqvG-uzemUT3TVPA",
  },
};

function getMovieData() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let movies = response["results"];
      // cardContainer의 자식이 있으면 첫번째 자식을 지운다.
      while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
      }
      movies.forEach((movie) => {
        const { title, poster_path, overview, vote_average, id } = movie;

        // html요소 생성하기
        let card = document.createElement("div");
        card.setAttribute("cardId", id);
        card.onclick = cardClick;

        let cardPoster = document.createElement("img");
        cardPoster.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original/${poster_path}`
        );
        card.className = "cardItem";

        let cardTitle = document.createElement("h3");
        cardTitle.className = "cardTitle";
        cardTitle.textContent = title;

        let cardOverview = document.createElement("p");
        cardOverview.textContent = overview;

        let cardRate = document.createElement("p");
        cardRate.textContent = `평점: ${vote_average}`;

        // card에 child로 생성된 html 넣기
        card.appendChild(cardPoster);
        card.appendChild(cardTitle);
        card.appendChild(cardOverview);
        card.appendChild(cardRate);

        cardContainer.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
}

// ------ 여기까지 tmdb api ------
