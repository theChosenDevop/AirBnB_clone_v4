document.ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  const selectedAmenities = {};
  const selectedCities = {};
  const selectedStates = {};
  $('input[type="checkbox"]').change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if (this.checked) {
      if (id.startsWith('amenity')) {
        selectedAmenities[id] = name;
      } else if (id.startsWith('city')) {
        selectedCities[id] = name;
      } else if (id.startsWith('state')) {
        selectedStates[id] = name;
      }
    } else {
      delete selectedAmenities[id];
      delete selectedCities[id];
      delete selectedStates[id];
    }
    const amenityList = Object.values(selectedAmenities).join(', ');
    const citiesList = Object.values(selectedCities).join(', ');
    const statesList = Object.values(selectedStates).join(', ');
    $('#amenities-list').text(amenityList);
    $('#cities-list').text(citiesList);
    $('#states-list').text(statesList);
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      data.forEach(function (place) {
      });
    }
  });
  $('#myButton').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        amenities: Object.keys(selectedAmenities),
        cities: Object.keys(selectedCities),
        states: Object.keys(selectedStates)
      })
    });
  });
});
