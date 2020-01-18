$(document).ready(function() {
    $("#loginbutton").click(function(event) {
 
        // Stop default form Submit.
        event.preventDefault();
 
        // Call Ajax Submit.
        ajaxLoginForm();
    });
});
 
function ajaxLoginForm() {
 
    // Get form
    var usname = $('#Username').val().trim();
    var pw = $('#Password').val();
 	
 	if(usname==''||pw=='') {
	alert("Please Fill All Fields");
	}
	else {
	    $("#loginbutton").prop("disabled", true);
	    $.ajax({
	        type: "POST",
	        url: "/login",

	        data: { 
	        	username: usname,
	        	password: pw 
	        },
	        contentType: "application/x-www-form-urlencoded;charset=utf-8",
	        success: function(response) {
	            console.log("SUCCESS");
	            console.log(response);         
	            if(response === "user"){
	                window.location.href = "/info1";
	            }else{
	                alert("Invalid username and password!");
	            }
	        },
	        error: function(response) { 
	            console.log("ERROR");
	            window.location.href = "/404";
	            $("#loginButton").prop("disabled", false);
	        }
//	        error: function(xhr, textStatus, error) {
//	            console.log(xhr.responseText);
//	            console.log(xhr.statusText);
//	            console.log(textStatus);
//	            console.log(error);
//	        }
    	});
 	}
}