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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLmxhc3QnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgkKCcubGFzdCcpKSkge1xyXG4gICAgICAkKCcubXQtaGVyby1ncm91cC0taG92ZXInKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tdC1oZXJvLWdyb3VwLS1ob3ZlcicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCQoJy5tdC1oZXJvLWdyb3VwLS1ob3ZlcicpKSkge1xyXG4gICAgICAkKCcubXQtaGVyby1ncm91cC0taG92ZXInKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgJCgnLmxhc3QnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgkKCcubGFzdCcpKSAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCQoJy5tdC1oZXJvLWdyb3VwLS1ob3ZlcicpKSkge1xyXG4gICAgICAkKCcubXQtaGVyby1ncm91cC0taG92ZXInKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tdC1oZXJvLWdyb3VwLS1ob3ZlcicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCQoJy5tdC1oZXJvLWdyb3VwLS1ob3ZlcicpKSkge1xyXG4gICAgICAkKCcubXQtaGVyby1ncm91cC0taG92ZXInKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfSlcclxufSk7ICJdLCJmaWxlIjoiYXBwLmpzIn0=
