$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    $("#quiz-result").empty();

    const gender = $("#gender").val();
    const hairColor = $("#hair-color").val();

    if (gender === "Choose..." || hairColor === "Choose...") {
      $("#quiz-result").append("<p>Please select all options</p>")
    } else if (gender === "Male" && hairColor === "Black") {
      $("#quiz-result").append("<h2>Your match:</h2><img src='img/bob.jpg' width='100%'>")
      
    } else if (gender === "Male" && hairColor === "Brown") {
      $("#quiz-result").append("<h2>Your match:</h2><img src='img/jimmy.png' width='100%'>")
     
    } else if (gender === "Female" && hairColor === "Black") {
      $("#quiz-result").append("<h2>Your match:</h2><img src='img/linda.jpg' width='100%'>")
      
    } else {
      $("#quiz-result").append("<h2>Your match:</h2><img src='img/gayle.png' width='100%'>")
      
    }
    $("#quiz-result").slideDown();
  });
});