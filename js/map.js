function initMap() {
  var center = {lat: 29.879262, lng: -95.439467};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: center
  });

  var locations = [
    ['<strong>Shenandoah</strong><br />','19075 IH 45 S Suite 480<br />Shenandoah, TX 77385', 30.182579,-95.451, '31'],
    ['<strong>Champions</strong><br />', '5203 FM 1960 W Suite E<br />Houston, TX 77069', 29.9581512,-95.7015311, '33'],
    ['<strong>Kingwood</strong><br />', '702 Kingwood Dr.<br />Kingwood, TX 77339', 30.0507603,-95.2474481, '50'],
    ['<strong>Windermere</strong><br />', '12020 FM 1960 W<br />Houston, TX 77065', 29.9246631,-95.6009009, '59'],
    ['<strong>The Woodlands</strong><br />', '10868 Kuykendahl Rd. Suite E<br />The Woodlands, TX 77381', 30.1755237,-95.5377794, '242'],
    ['<strong>Vintage Marketplace</strong><br />', '10115 Louetta Road, Suite 100<br />Houston, TX 77070', 29.999963,-95.5641535, '266'],
    ['<strong>Fairfield Town Center</strong><br />', '28902 Highway 290, Suite J-05<br />Cypress, TX 77433', 29.9928375,-95.7526516, '270'],
    ['<strong>Central Houston</strong><br />', '1005 Waugh Dr. Suite A<br />Houston, TX 77019', 29.7564325,-95.3998954, '54'],
    ['<strong>Clearlake</strong><br />', '19411-A Gulf Freeway<br />Webster, TX 77598', 29.5423568,-95.1424782, '58'],
    ['<strong>Town Center Pearland</strong><br />', '11302 Broadway Suite 102<br />Pearland, TX 77584', 29.5551389,-95.3969178, '175'],
    ['<strong>Beaumont</strong><br />', '3050 Dowlen Rd. Suite N<br />Beaumont, TX 77706', 30.1072119,-94.1699546, '177'],
    ['<strong>Pasadena</strong><br />', '5932 Fairmont Pkwy. Suite 150<br />Pasadena, TX 77505', 29.6491396,-95.1534339, '205'],
    ['<strong>Pearland Parkway</strong><br />', '2630 Pearland Parkway, Suite 130<br />Pearland, TX 77581', 29.559,-95.2619005, '265'],
    ['<strong>Plaza in the Park</strong><br />', '5110 Buffalo Speedway Suite 100<br />Houston, TX 77005', 29.7278523,-95.4313008, '24'],
    ['<strong>Sugar Land</strong><br />', '16101 Kensington Dr.<br />Sugar Land, TX 77479', 29.5982158,-95.6280974, '37'],
    ['<strong>Katy</strong><br />', '1590 S Mason Rd. Suite A<br />Katy, TX 77450', 29.7589217,-95.7541195, '56'],
    ['<strong>College Station</strong><br />', '980A University Dr. East Suite 4<br />College Station, TX 77840', 30.6351478,-96.325074, '87'],
    ['<strong>Kirkwood</strong><br />', '14008 Memorial Dr. Suite A<br />Houston, TX 77079', 29.7714944,-95.5927357, '100'],
    ['<strong>Houston</strong><br />', '1413 S Voss Rd. Suite A<br />Houston, TX 77057', 29.7517959,-95.5027201, '120'],
    ['<strong>Southpark at Cinco Ranch</strong><br />', '24926 FM 1093, Ste. A<br />Katy, TX 77494', 29.6981484,-95.8113739, '272']
  ];

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  var image = {
    url: 'https://mediaprodpeiwei.blob.core.windows.net/contentimg/%245Lunch/img/loc-icon.png',
    size: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      id: 'icon'+locations[i][4],
      icon: image,
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0] + locations[i][1]);
        infowindow.open(map, marker);
        var storeNum = locations[i][4];

        var currentStore = $('[id=store-' + storeNum +']');
        var currentStoreIcon = $('[id=store-' + storeNum +']' + ' > div > .info > .noodleman');

        $('.list').animate({
          scrollTop: $('.list').scrollTop() + currentStore.offset().top - 2932
        },500);

        currentStoreIcon.addClass("selectedIcon");

        console.log($('.list').scrollTop() + currentStore.offset().top);
        console.log(currentStore.offset().top)
        return false;
      }
    })(marker, i));
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        var storeNum = locations[i][4];

        var currentStore = $('[id=store-' + storeNum +']');
        var currentStoreIcon = $('[id=store-' + storeNum +']' + ' > div > .info > .noodleman');

        $("div.selectedIcon").removeClass("selectedIcon");
        currentStoreIcon.addClass("selectedIcon")
      }
    })(marker, i));
  }
}
