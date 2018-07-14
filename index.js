// $('#work-nav').click(function(){
//     $('.about-page').scrollTo('li:eq(15)', 2500)
// })

$(document).ready(function(){
    $(this).scrollTop(0);


    $(function () {
        $('.lazy').Lazy();
    });


    $('#hello-nav').click(function (event) {
        // event.preventDefault();
        var goTop = $('#about-page').offset().top;
        $("html, body").scrollTop(goTop);
    })

    $('#work-nav').click(function (event) {
        // event.preventDefault();
        var goTop = $('#work-page').offset().top;
        $("html, body").scrollTop(goTop);
    })

    $('#contact-nav').click(function (event) {
        // event.preventDefault();
        var goTop = $('#contact-page').offset().top;
        $("html, body").scrollTop(goTop);
    })




})
