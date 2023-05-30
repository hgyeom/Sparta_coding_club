// ------ 변수(선택자) 선언부 ------
const searchBtn = document.querySelector(".searchBtn");
const card_container = document.querySelector(".card_container");
const searchText = document.querySelector(".search");
// const
// ------ 여기까지 선언부 ------

// ------ 여기부터 검색 ------
searchBtn.addEventListener("click", () => {
  let search_text = searchText.value.toLowerCase();
  movie_search(search_text);
});

function movie_search(search_text) {
  // card_container의 자식
  let search_target = card_container.children;
  // for문 돌리기.
  for (let i = 0; i < search_target.length; i++) {
    // class이름으로 요소 가져오기. 대소문자 구분을 하지 않기 위해 toLowerCase를 넣음.
    let search = search_target[i]
      .getElementsByClassName("card_title")[0]
      .textContent.toLowerCase();

    // indexOf로 검색하기.
    if (search.indexOf(search_text) != "-1") {
      search_target[i].style.display = "block";
      console.log(search);
    } else {
      search_target[i].style.display = "none";
    }
  }
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

let get_movie_data = {
  fetch: () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
      .then((response) => response.json())
      //   .then((response) => console.log(response))
      .then((response) => {
        let rows = response["results"];
        // console.log(rows);
        // card_container의 자식이 있으면 첫번째 자식을 지운다.

        console.log(this);
        return movie_list(rows);
      })
      .catch((err) => console.error(err));
    // while (card_container.firstChild) {
    //   card_container.removeChild(card_container.firstChild);
    // }
    // this.rows.forEach((a) => {
    //   let title = a["title"];
    //   let poster = a["poster_path"];
    //   let overview = a["overview"];
    //   let rate = a["vote_average"];
    //   // html요소 생성하기
    //   let card_div = document.createElement("div");
    //   let card_div_img = document.createElement("img");
    //   card_div_img.setAttribute(
    //     "src",
    //     `https://image.tmdb.org/t/p/original/${poster}`
    //   );
    //   card_div.className = "card_item";
    //   let card_div_title = document.createElement("h3");
    //   card_div_title.className = "card_title";
    //   card_div_title.innerHTML = title;
    //   let card_div_overview = document.createElement("p");
    //   card_div_overview.innerHTML = overview;
    //   let card_div_rate = document.createElement("p");
    //   card_div_rate.innerHTML = "평점: " + rate;
    //   // card_div에 child로 card_div_img 넣기
    //   card_div.appendChild(card_div_img);
    //   // card_divd_img에 형제요소로 card_div_title 추가, 이하 반복
    //   card_div_img.after(card_div_title);
    //   card_div_title.after(card_div_overview);
    //   card_div_overview.after(card_div_rate);
    //   card_container.append(card_div);
    // });
  },
};
// ------ 여기까지 tmdb api ------

let movie_list = function (rows) {
  console.log(rows);
};
get_movie_data.fetch();
