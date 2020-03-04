$(function () {
  $('.last').on('mouseenter', function (e) {
    if ($(e.target).closest($('.last'))) {
      $('.mt-hero-group--hover').show();
    }
  });

  $('.mt-hero-group--hover').on('mouseenter', function (e) {
    if ($(e.target).closest($('.mt-hero-group--hover'))) {
      $('.mt-hero-group--hover').show();
    }
  })

  $('.last').on('mouseleave', function (e) {
    if ($(e.target).closest($('.last')) && $(e.target).closest($('.mt-hero-group--hover'))) {
      $('.mt-hero-group--hover').hide();
    }
  });

  $('.mt-hero-group--hover').on('mouseleave', function (e) {
    if ($(e.target).closest($('.mt-hero-group--hover'))) {
      $('.mt-hero-group--hover').hide();
    }
  })
}); 