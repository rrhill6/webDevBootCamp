// adds a click event to the questions in the FAQs
$(".question").click(function() {
  $(this).next().slideToggle("fast"); // toggles the answer down & hides it again
  $(this).children().toggleClass("collapse"); // toggles the arrows to point 'up' & 'down'
})