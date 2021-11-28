
$('.wrapper .area .image-view .image').hover(
    function () {
        // .wrapper .area .image-view .image에 해당하는 놈에 손이 올라갔을 때
        let $this = $(this); // this는 html태그, 해당 html태그를 jQuery로 감싸 jQuery에서 컨트롤 가능하게 만들어 저장
        if (!$this.hasClass('clickable')) return; // 태그가 clickable 클래스를 갖고 있으면 무시
        $this.stop().animate(
            {
                // 기존 실행중이던 애니메이션을 중단시키고, 새 애니메이션 실행
                width: '310px', // width, height, lineHeight 조정
                height: '210px',
                lineHeight: '380px',
            },
            100
        ); // milliseconds단위 애니메이션 시간
    },
    function () {
        let $this = $(this);
        if (!$this.hasClass('clickable')) return;
        $this.stop().animate(
            {
                width: '300px',
                height: '200px',
                lineHeight: '360px',
            },
            100
        );
    }
);
// hover의 첫번째 function을 마우스를 올리면 작동, 두번째 function은 마우스가 떠날때 작동.

$('#user-popup').on('click', function () {
    if ($('#popup-user').css('display') === 'none') $('#popup-user').show();
    else $('#popup-user').hide();
});

if ($('.site-header #login').attr('href'))
    $('.site-header #login').attr(
        'href',
        `${$('.site-header #login').attr('href')}?redirect=${
            window.location.pathname
        }`
    );

if ($('#popup-user #logout').attr('href'))
    $('#popup-user #logout').attr(
        'href',
        `${$('#popup-user #logout').attr('href')}?redirect=${
            window.location.pathname
        }`
    );

