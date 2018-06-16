// adds a click event to the questions in the FAQs
$(".question").click(function() {
  $(this).next().slideToggle().animate({
    width: "100%"}, 1000 ).animate({
    fontSize: "1.2em",
    borderWidth: "10px"
  }); // toggles the answer down & hides it again
  $(this).children().toggleClass("collapse"); // toggles the arrows to point 'up' & 'down'
})