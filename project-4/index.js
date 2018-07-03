$(document).ready(function() {
    $.ajax({
        url: "https://api.myjson.com/bins/2sadq?pretty=1",
        dataType: "json",
        success: function(response) {
            $.each(response.apartments, function(i, apartment){
              var apartmentClass = apartment.city.toLowerCase().replace(" ", "-");
              var listing = "<a href='#'' id =" + apartment.id + " class = 'list-group-item " + apartmentClass + " listings'><h4 class = 'list-group-item-heading'>" + apartment.description + "/ " + apartment.bedrooms + "BR / " + apartment.price + "</h4><p class = 'list-group-item-text'>" + apartment.neighborhood + "</p></a>";
              $(".apartments").append(listing);      
            });
        },
        error: function(error) {
          console.log(error);
        }
    });

    $(".filter").click(function() {
      $(".filter").removeClass("active"); // remove the active class when another city is clicked
      $(this).addClass("active"); // add the active class to the city clicked

      $(".listings").show(); // show all the listings

      // when a city is selected; show those listings, hide all other listings
      var city = $(this).attr("id"); 
      if (city !== "all") {
        $(".listings").not("." + city).css("display", "none"); 
      }  
    });

    $(document). on("click", ".listings", function() {
      var id = $(this).attr("id"); // gets the apartment clicked by id from the array

       $.ajax({
          url: "https://api.myjson.com/bins/2sadq?pretty=1",
          dataType: "json",
          success: function(response) {
              var selectedApartment = $.grep(response.apartments, function(apartment) {
                return apartment.id == id;
              });
              // gets the 1st object in the selected array and saves the address
              var address = selectedApartment[0].address; 
              // show the address of the selected apartment in google maps in a new window
              window.open("https://maps.google.com/q=" + address); 
          },
          error: function(error) {
            console.log(error);
          }
        });
    });
});


