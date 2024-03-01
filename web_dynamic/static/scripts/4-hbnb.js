document.ready(function() {
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
    }
  });
  const selectedAmenities = {};
  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');
    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selected Amenities[amenityId];
      }
    const amenityList = Object.values(selectedAmenities).join(', ');
    $('#amenities-list').text(amenityList);
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function(data) {
    data.forEach(function(place) {
    });
    }
  });
  $('#myButton').click(function() {
  const checkedAmenities = getCheckedAmenities();
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ amenities: checkedAmenities }),
    success: function(data) {
    }
    });
  });
});
