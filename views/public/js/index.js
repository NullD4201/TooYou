let $input = $('.wrapper .search-area .search-box .input-area');
let $box = $('.wrapper .search-area .search-box');

$input.blur(function () {
    $box.css('outline', '1px solid #24292f');
});
$input.focus(function () {
    $box.css('outline', '3px solid #04090f');
});