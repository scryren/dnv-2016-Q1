/*
* Last Updated: 1/2016
* Summary: Adds a generic error message under the
* submit button if there is one or more required fields
* missing. Hides message on submit if all required fields
* are valid
*/


$(document).ready(function() {
  $('#generic-form-error-notification').css('display','none');

    var notificationCount = 0;

  $('#eq-form').submit(function(){

    var numItems = $('.LV_invalid').length;

      if (numItems >= 1 && notificationCount == 0) {
        $('#generic-form-error-notification').css('display','initial');
        $('#generic-form-error-notification').append('<div class="first-error" style="color: #e74c39; font-size: 0.625em; font-weight: bold;">*One or more required fields are missing.</div>');
        notificationCount++;
      }

      else if (numItems >= 1 && notificationCount == 1) {
        $('.first-error').css('display','none');
        $('#generic-form-error-notification').append('<div class="second-error" style="color: #e74c39; font-size: 0.625em; font-weight: bold;">*One or more required fields are still missing.</div>');
        notificationCount++;
      }

      else if (numItems >= 1 && notificationCount > 1) {
        notificationCount++;
      }

      else {
        $('#generic-form-error-notification').css('display','none');
      }

  });
});
