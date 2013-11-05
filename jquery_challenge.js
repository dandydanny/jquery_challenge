// http://socrates.devbootcamp.com/challenges/389

// Spend 10 minutes on each of the following hacks to the socrates website, work with a new pair on each hack. Enter them in the console to make sure it works and then save your results in the linked gist. For each hack give the names of the pair working and the jquery code used to create the hack. You'll want to reference the jQuery documentation .

// Use basic selectors (id, class, element) to choose an element on the page. Use the .css() method to alter at least two CSS properties of this element.
// Use basic selectors and the find() method to select an image on the page and change it with another image of your choice.
// Use traverse methods to select all instances of a repeated element on the page ( like the h3 surrounding the words 'Code Review' ) and use the animate() method to modify it.
// Try to find an element that requires at least three selectors / traverse methods to locate it and then use the .on() method to bind an event handler on these elements (use an event other than click).
// Your choice.


$(".span8").css("background-color", "red");

$("#toc_0").css("color", "blue");

$("p").css({"color": "green", "background-color": "red"});

('.user:nth-child(4) img').attr('src', 'http://fc04.deviantart.net/fs44/f/2009/073/b/f/Little_Godzilla_by_rongs1234.jpg');

$(".user").find("img").animate({height: "500px"},"slow");

$('p').on("mouseover",function(){
  $(this).animate({fontSize: "3em"});
});
