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
      }).done(function(res) {
        if (res.data.registered) {
          window.parent.location.href = "http://autolotto.com/leaderboard/";
        } else {
          window.parent.location.href = "http://autolotto.com/confirmation/";
        }
      }).fail(function() {
        alert('Please enter a valid US phone number!');
      });

      event.preventDefault();
    });
  });
})(jQuery);
