$(function () {
    $(".expart-area-border").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".expart-area-border:hidden").slice(0, 1).slideDown();
		
        if ($(".expart-area-border:hidden").length == 0) {
            $(this).fadeOut(100);
            $('.expart-area-border').css("box-shadow","0 1px 20px red")
        }
    });
});




