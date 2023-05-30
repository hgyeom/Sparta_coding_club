document.addEventListener("DOMContentLoaded", function () {
  get_movie_data();
});

// ------ 변수(선택자) 선언부 ------
const search_btn = document.querySelector(".search_btn");
const card_container = document.querySelector(".card_container");
const search_text = document.querySelector(".search_text");
const card_item = document.querySelector(".card_item");
const search_count = document.querySelector(".search_count");
// const
// ------ 여기까지 선언부 ------

// ------ 카드 클릭 이벤트 ------

function card_click() {
  alert("영화 ID: " + this.getAttribute("card_id"));
}

// ------ 여기까지 카드 클릭 ------

// ------ 여기부터 검색 ------

// 클릭으로 검색
search_btn.addEventListener("click", () => {
  let search = search_text.value.toLowerCase();
  movie_search(search);
});

// 엔터키로 검색.
search_text.addEventListener("keydown", (e) => {
  // e는 이벤트 종류
  if (e.keyCode === 13) {
    let search = search_text.value.toLowerCase();
    movie_search(search);
  }
});

function movie_search(search) {
  // card_container의 자식
  let search_target = [...card_container.children];
  // console.log(search_target[0]);
  let searching = search_target.filter((value) => {
    let searchList = value
      .getElementsByClassName("card_title")[0]
      .textContent.toLowerCase();
    console.log(searchList);
    if (searchList.indexOf(search) != "-1") {
      value.style.display = "block";
      return searchList;
    } else {
      value.style.display = "none";
    }
  });

  search_count.textContent = `검색 결과: ${searching.length}`;
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

function get_movie_data() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    //   .then((response) => console.log(response))
    .then((response) => {
      let movies = response["results"];
      // console.log(rows);
      // card_container의 자식이 있으면 첫번째 자식을 지운다.
      while (card_container.firstChild) {
        card_container.removeChild(card_container.firstChild);
      }
      movies.forEach((movie) => {
        const { title, poster_path, overview, vote_average, id } = movie;

        // html요소 생성하기

        let card_div = document.createElement("div");
        card_div.setAttribute("card_id", id);
        card_div.onclick = card_click;

        let card_div_img = document.createElement("img");
        card_div_img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original/${poster_path}`
        );
        card_div.className = "card_item";

        let card_div_title = document.createElement("h3");
        card_div_title.className = "card_title";
        card_div_title.textContent = title;

        let card_div_overview = document.createElement("p");
        card_div_overview.textContent = overview;

        let card_div_rate = document.createElement("p");
        card_div_rate.textContent = `평점: ${vote_average}`;

        // card_div에 child로 생성된 html 넣기
        card_div.appendChild(card_div_img);
        card_div.appendChild(card_div_title);
        card_div.appendChild(card_div_overview);
        card_div.appendChild(card_div_rate);

        card_container.appendChild(card_div);
      });
    })
    .catch((err) => console.error(err));
}

// ------ 여기까지 tmdb api ------
