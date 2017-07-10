$(document).ready(function(){
  $.getJSON("https://mediaprodpeiwei.blob.core.windows.net/contentimg/%245Lunch/js/houston-locations.js", function(data){
      $.each(data, function(key, value){
          $("ul.mapList").append(
            '<li id="store-' + value.restaurant + '"><div class="singleLocation clearfix">' +
              '<div class="info">' +
                '<div class="noodleman"></div>' +
                '<div class="storename">' + value.restaurantName + '</div>' +
                '<div class="address">' + value.address + '<br />' + value.city + ', ' + value.state + ' ' + value.zip + '</div>' +
                '<div class="details"><a href="' + value.url + '">Restaurant Details</a></div>' +
              '</div>' +
              '<div class="cta">' +
                '<a href="' + value.directions + '" target="_blank"><button class="directions">DIRECTIONS</button></a>' +
                '<div class="orderByPhone">ORDER BY PHONE</div>' +
                '<div class="phone"><a href="tel:' + value.phoneNum + '">' + value.phone + '</a></div>' +
              '</div>' +
            '</div></li>'
          );
          console.log(value.url);
          console.log(value.directions);
      })
  });

});
