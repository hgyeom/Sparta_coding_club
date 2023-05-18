// nautocomplete 선언
const $nautocomplete = $('#nautocomplete');
// autoFrame 선언(최근검색어 창)
const $autoFrame = $('#autoFrame');

$nautocomplete.on('click', function(){
    // 검색기록창 토글 
    $autoFrame.toggle();
    // 펼치기, 접기(ico_arr) 이미지 변경
    // nautocomplete 엘리먼트에 fold class toggle
    $nautocomplete.toggleClass('fold');
  });