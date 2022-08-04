$("#early_access").click(function(){
    var email = $("#input_email").val();
    $.ajax
    ({ 
        crossDomain: true,
        dataType: 'jsonp',
        url: 'http://127.0.0.1:8000/api/early_access',
        data: {"early_access_email": email},
        type: 'get',
        success: function(result)
        {
            $(".hero-form").html("<b>Thanks for your request, we will get back to you soon</b>")
        },
        complete: function(data, textStatus, xhr)
        {
            $(".hero-form").html("<b>Thanks for your request, we will get back to you soon</b>")
        }
    });
});