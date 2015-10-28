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
        window.parent.location.href = 'http://web.autolotto.com/giveaway/welcome';
      }).fail(function() {
        alert('Please enter a valid US phone number!');
      });

      event.preventDefault();
    });
  });
})(jQuery);
