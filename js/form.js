function getQuery(q) {
   var query = window.location.search.substring(1);
   var vars = query.split('&');
   for (var i=0; i < vars.length; i++) {
     var pair = vars[i].split('=');
     if(pair[0] == q) return pair[1];
   }
}

(function($) {
  $(document).ready(function() {
    $(".signupForm").submit(function(event) {
      var formData = {
        'phoneNumber': $('input[name=phoneNumber]').val(),
        'inviteCode': getQuery('i')
      }

      $.ajax({
        type: 'POST',
        url: 'https://autolotto-backend-production.herokuapp.com/api/v1/users',
        data: formData,
        dataType: 'json',
        crossDomain: true,
        encode: true
      }).done(function(res) {
        if (res.data.created) {
          window.parent.location.href = 'http://web.autolotto.com';
        } else {
          window.parent.location.href = "http://autolotto.com/me";
        }
      }).fail(function() {
        alert('Please enter a valid US phone number!');
      });

      event.preventDefault();
    });
  });
})(jQuery);
