// $(document).ready(function(){
//     $(".clickable").click(function(){
//         $(".finegirl").slideDown();
//         $(".finegirl").slideUp();
//     });
// });
// $(document).ready(function(){
//     $(".clickable").click(function(){
//         $(".finegirl").fadeIn();
//         $(".finegirl").fadeOut();
//     });
// });
$(document).ready(function(){
    $(".clickable").click(function(){
        $(".finegirl").fadeToggle();
        $(".finegirl").slideToggle();
    });
});