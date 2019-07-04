$(document).ready(function () {
    var rating = "g"; 
    var limit = 5 ;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=SOvDiUTgSnNEmgmksPCuxmctBIudPGav&q=" + topics + "&limit=" + limit + "&offset=0&rating=" + rating + "&lang=en";
    var topics = ["astronaut", "satellite", "aliens", "NASA", "planets", "stars"];
    // var topics = "astronaut";

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#myButtons").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
        // console.log(topics[i]);
        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#myButtons").append(a);
    }
    $("button").on("click", function () {







        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
        });

    });
});

