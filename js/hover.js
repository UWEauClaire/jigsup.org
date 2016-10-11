$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-toggle', this).not('.in .dropdown-toggle').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-toggle', this).not('.in .dropdown-toggle').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
});
