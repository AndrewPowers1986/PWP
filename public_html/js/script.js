$(document).ready(function(){
        $('#contact-form').validate({
            debug: true,
            errorClass: 'alert alert-danger',
            ErrorLabelContainer: '#output-area',
            errorElement: 'div',
            // these are the rules to define what data we want and what we don't want
            //each of these groups start with the form input NAME attribute
            rules: {
                name:{
                    required: true
                },
                email:{
                    email: true,
                    required: true
                },
                message:{
                    required: true,
                    maxlength: 2000
                }
            },
            messages: {
                name: {
                    required: 'Please introduce yourself.'
                },
                email:{
                    email: 'Please provide a valid e-mail address.',
                    required: 'Please provide your e-mail address.'
                },
                message: {
                    required: 'Please say a few words about your business.',
                    maxlength: 'There is only room in this message for 2000 characters or less.'
                }
            },
            submitHandler:(form) => {
                $('#contact-form').ajaxSubmit({
                    type: 'POST',
                    url: $('#contact-form').attr('action'),
                    success: (ajaxOutput) => {
                        $('#output-area').css('display','')
                        $('#output-area').html(ajaxOutput)

                        if($('.alert-success' >= 1)) {
                            $('#contact-form')[0].reset()
                        }
                    }
                })
            }

        })
})