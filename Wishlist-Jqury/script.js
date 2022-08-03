/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append("<li>" + item + "<span class='label pending'> Pending </li>");
}

$(document).on('click', '.pending', function() {
    var li_node = $(this).parent();
    li_node.append("<span class='label success'> Done! </span>");
    li_node.addClass('completed');
    $(this).remove();
    updateTotal();
});

$(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').val('');
    $('#item').focus();
    updateTotal();
});

function updateTotal() {
    var pending = $('.pending').length;
    var completed = $('.completed').length;
    $('.total').text("Pending: " + pending + " Completed: " + completed);
}