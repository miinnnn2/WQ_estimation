jQuery(document).ready(function () => {
    var 요로링 = {진행업체:"꼬모다이아몬드", 상세내용:"플래티넘 다이아 5부 반지"};
    var 고리중따이 = {진행업체:"엘도라도", 상세내용:"1캐럿 대왕큰 엄청난 반지"};
    var estimation = [요로링, 고리중따이];

    for(var i=0; i<estimation.length; i++){
        $('.form_detail').append('<ul>\
            <li class="company">진행업체</li>\
            <li class="company_name">꼬모다이아몬드\
        </ul>\
        <div class="benefit clearfix">\
            혜택 보기\
        </div>\
        <ul>\
            <li class="company">상세 내용</li>\
            <li class="company_content">플래티넘 다이아 5부 반지</li>\
        </ul>');
}