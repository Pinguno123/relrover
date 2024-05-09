$(document).ready(function () {
    
    $('.vistos-slide').click(function (e) { 
        e.preventDefault();
        
        $.ajax({
            type: "GET",
            url: "vistos.html",
            dataType: "html",
            success: function (response) {
                $('main').html(response);
            }
        });
    });
});