$(document).ready(function () {
    // Show any items in local storage if any list items
    // were created before or from page refresh (data persistance)
    $("#list-items").html(localStorage.getItem("listItems"));

    // Bind the item to the form
    $(".add-items").submit(function (event){
        event.preventDefault();
    // Check input & post item from input in the UL of the HTML
        var item = $("#todo-list-item").val();
        if (item) {      
          $("#list-items").append("<li><input class = 'checkbox' type = 'checkbox' />" + item + "<a class='remove'>x</a><hr></li>");
          // Save item in local storage
          localStorage.setItem("listItems", $("#list-items").html());
          $("#todo-list-item").val("");
          // 'easter egg'... Forrest Gump running gif shows up when user inputs "run"
          if (item == "run"){
            $(".running").css("display", "block");
          }
        }
    });
    
    // Check to see if the check box is checked
    // put check in the box and strike through text when checked
    $(document).on("change", ".checkbox", function() {
        if($(this).attr("checked")) {
           $(this).removeAttr("checked"); 
        } else {
           $(this).attr("checked", "checked");  
        }
        $(this).parent().toggleClass("completed"); // puts check mark in the box and lines through text
        localStorage.setItem("listItems", $("#list-items").html());
    });
    // Be able to delete item from list (animated slide up when item deleted)
    $(document).on("click", ".remove", function() {
        $(this).parent().slideUp("slow", function() {
        localStorage.setItem("listItems", $("#list-items").html());
        });
    });
});
    
    // Use (document) as a selector to check the box/strike through text
    // and to delete items because the page changes from the initial load. 
    
    
    

