$('#whatHeadLink').on('click', function(event) {
    var target = $(whatExplanation);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 30
        }, 1000);
    }
});

function postContactToGoogle() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var institution = $('#institution').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/1r45N3CRJNUxwW5pmzUzX3I4bA04eOq7RXGSvpZ_mRbY/formResponse",
        data: {
            "entry_1216290066": name,
            "entry_1589502254": email,
            "entry_1876550738": phone,
            "entry_546673556": institution
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                window.location.replace("ThankYou.html");
            },
            200: function () {
                window.location.replace("ThankYou.html");
            }
        }
    });
}