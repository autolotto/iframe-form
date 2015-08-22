(function($) {
  $(document).ready(function() {
    $("#signupForm").submit(function() {
      console.log('test is firing')
      window.location.href = "https://www.google.com/";
    });
  });
})(jQuery);
