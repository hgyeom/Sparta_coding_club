class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() {
  let title = prompt("애니메이션 제목을 입력하세요.", "naruto");

  let res = await loadJson(
    `https://animechan.vercel.app/api/random/anime?title=${title}`
  );
  if (res) {
    alert(`${res.character}: ${res.quote}.`);
  } else if (err instanceof HttpError && err.res.status == 404) {
    alert(
      "일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!"
    );
  } else {
    throw err;
  }
}

narutoIsNotOtaku();
