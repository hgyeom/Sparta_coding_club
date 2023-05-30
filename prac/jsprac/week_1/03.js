// 2. 문자열 : string (문자열 = 문자의 나열)
// 작은 따옴표( '' )나 큰 따옴표( "" )로 감싸서 표현

let str = "Hello World!";
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열의 길이 확인하기
console.log(str.length); 

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello ";
let str2 = "World!";
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5)); // 7부터 5개만 출력해줘
console.log(str3.slice(7,12)); // 7다음부터 12까지 잘라줘

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World")); // World가 시작되는 지점 찾기

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result01 = str5.replace("World", "JavaScript"); // World를 JavaScript로 대체
console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(','); // 쉼포( , )를 기준으로 자르기. 배열로 반환된다.
console.log(result02);