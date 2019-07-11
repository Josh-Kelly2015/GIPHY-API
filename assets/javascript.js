$(document).ready(function () {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NdzDFSTJNopW8VJkCARfOsMRIYY2W7wm&q=" + "astronaut" + "&limit=10&offset=10&rating=G&lang=en";
    var topics = ["astronaut", "satellite", "aliens", "NASA", "planets", "stars"];

    // (this is necessary otherwise we will have repeat buttons)
    $("#myButtons").empty();

    // Looping through the array of topics

    for (var i = 0; i < topics.length; i++) {
        console.log(topics);
        console.log(topics[i]);

        // Create a button
        var a = $("<button>");
        // Adding a class
        a.addClass("arrayButtons");
        // Adding a data-attribute with a value of the topic at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the topic at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#myButtons").append(a);
    }

    $(".arrayButtons").on("click", function () {
        // console.log('hey');


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
            var responseArray = response.data
            //Below code will not read images property outside of my console.log()
            console.log(responseArray);

            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            for (var i = 0; i < responseArray.length; i++)
                // path to the URL for top 10 giphs recieved
                console.log(responseArray[i].images.original_still.url);
            var giphs = $("<button>");
            // adding class still for a future on click event that changes still to active
            giphs.addClass("still");
            // attribute because maybe i use this to change the still image not class
            giphs.attr("data-name", "still");
            //putting giph inside the button tag so we can click to change the url
            giphs.html(responseArray[i].images.original_still.url);
            // Adding the button to the HTML
            $("#myGiphs").append(giphs);
        });

    });


    //take input from text box to create a new button
    $("#search").on("click", function () {
        console.log($(".form-control").val().trim());
        var searchValue = $(".form-control").val().trim();
        console.log(searchValue.toStr());
        topics.push(searchValue);

        //      // Create a button
        //      var newGiph = $("<button>");
        //      // Adding a class
        //      newGiph.addClass("arrayButtons");
        //      // Adding a data-attribute with a value of the topic at index i
        //      newGiph.attr("data-name", topics[i]);
        //      // Providing the button's text with a value of the topic at index i
        //      newGiph.text(topics[i]);
        //      // Adding the button to the HTML
        //      $("#myButtons").append(newGiph);
    });

});
