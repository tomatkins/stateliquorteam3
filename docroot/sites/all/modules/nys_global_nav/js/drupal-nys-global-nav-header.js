(function ($, Drupal, window, document, undefined) {

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.nys_global_nav = {
    attach: function(context, settings) {

      var js_library = Drupal.settings.nys_global_nav.js_library;
      $.getScript( js_library);

    }
  };
})(jQuery, Drupal, this, this.document);
