var $photoAnchors = $('a[data-title]');

$('#search-input').keyup(function searchGallery() {
  var inputVal = $(this).val().toLowerCase();

  $photoAnchors.each(function() {
    
    $(this).attr('data-lightbox', 'image').parent().show();

    var photoCaption = $(this).attr('data-title').toLowerCase();

    if (! photoCaption.includes(inputVal) ) {
      $(this).attr('data-lightbox', '#').parent().hide();
    }
  });
});
