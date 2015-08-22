(function($) {
  $(document).ready(function() {
    $(".signupForm").submit(function(event) {
      var formData = {
        'phoneNumber': $('input[name=phoneNumber]').val()
      }

      $.ajax({
        type: 'POST',
        url: 'https://autolotto-backend-production.herokuapp.com/api/v1/pre/signup',
        data: formData,
        dataType: 'json',
        crossDomain: true,
        encode: true
      }).done(function() {
        window.parent.location.href = "/confirmation";
      });

      event.preventDefault();
      window.parent.location.href = "http://a6n2jd5.autolotto.com/confirmation/";
    });
  });
})(jQuery);
