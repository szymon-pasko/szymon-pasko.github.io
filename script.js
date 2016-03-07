
$(document).on('click', '.edit', function () {
    $('.hide').toggleClass('show');
    $('.edit').toggleClass('hide');
    $('.save').toggleClass('show'); 
});

$(document).on('click', '.save', function () {
    $('.show').toggleClass('hide');
    $('.edit').toggleClass('show');
    $('.save').toggleClass('hide'); 
});