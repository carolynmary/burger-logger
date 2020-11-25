$(document).ready(function () {

    // DEVOUR IT
    $(".burger-list").on("submit", function (event) {
        event.preventDefault();
        const burgerId = $(this).children(".burger-id").val();
        $.ajax({
            method: "PUT",
            url: "/api/burger/" + burgerId
        }).then(function (data) {
            location.reload();
        });
    });

});