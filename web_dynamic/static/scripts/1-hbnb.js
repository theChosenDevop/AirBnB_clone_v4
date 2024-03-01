document.ready(function() {
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
});
