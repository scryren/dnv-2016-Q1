/*
* Last Updated: 12/19/2014
* Summary: Adds Privacy Policy Statement and Checkbox,
* as well as the requirements for the Privacy Policy
* Statement Checkbox
*/

/* ==========================================================================
   Privacy Policy Statement
   ========================================================================== */


$(document).ready(function () {
	//$('#privacy-statement-checkbox').css('display','inline');

	$('#privacy-statement').append('<div id="privacy-statement-checkbox"><label class="privacy"><input id="fieldPrivacyStatementCheckbox" name="privacyStatementCheckbox" type="checkbox" value="on"></label></div><span class="privacy-statement-copy">By submitting this form, I agree to receive promotional offers and other communications from Denovo. Consent can be withdrawn by unsubscribing at any time. Please refer to Denovo&rsquo;s <a href="http://www.denovo-us.com/privacy-policy" target="_blank">Privacy Policy</a> for details.</span>'
	);

	var fieldPrivacyStatementCheckbox = new LiveValidation('fieldPrivacyStatementCheckbox');fieldPrivacyStatementCheckbox.add( Validate.Acceptance, {failureMessage: "You must agree to Denovo's Terms of Service." } );

});
