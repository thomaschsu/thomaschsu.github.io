// Function to make navbar change color
$(function() {
    $(document).scroll(function() {
        var $nav = $('#navbar');
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})