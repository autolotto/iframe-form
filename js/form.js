(function($) {
  $(document).ready(function() {
    $(".signupForm").submit(function(event) {
      var formData = {
        'phoneNumber': $('input[name=phoneNumber]').val()
      }

      $.ajax({
        type: 'POST',
        url: 'https://autolotto-backend-production.herokuapp.com/api/v1/pres',
        data: formData,
        dataType: 'json',
        crossDomain: true,
        encode: true
      }).done(function(res) {
        var redirectTo = 'http://web.autolotto.com/giveaway/home/';
        window.parent.location.href = 'https://autolotto.com/redirect?url=' + redirectTo;
      }).fail(function() {
        alert('Please enter a valid US phone number!');
      });

      event.preventDefault();
    });
  });
})(jQuery);
