function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError); //Activity showPosition, or activity showError to display error message in 'message' if there is a error
	} else {
		document.getElementById("message").innerHTML = "Geolocation is not supported by this browser."; //The opening browser cannot use geolocation
	}
}
function showPosition(position) {
	// display the latitude and longitude of coordinates in 'message' 
	document.getElementById("message").innerHTML = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;	
	var latlon = position.coords.latitude + "," + position.coords.longitude;
	// Use the latitude and longitude of coordinates to access to a map service(google map) and copy the images
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
	// display the map image in 'showmap'	
	document.getElementById("showmap").innerHTML = "<img src='"+img_url+"'>";
	
}
function showError(error) {
	// display the error message in 'message' if there is some errors 
	switch(error.code) {
		case error.PERMISSION_DENIED:
			document.getElementById("message").innerHTML = "User denied the request for Geolocation." // The user block the geolocation, not allow it to know the location
			break; // Put the break, if not, it would go to next case
		case error.POSITION_UNAVAILABLE:
			document.getElementById("message").innerHTML = "Location information is unavailable." //The geolocation cannot get your location now, like the wifi disconnect
			break;
		case error.TIMEOUT:
			document.getElementById("message").innerHTML = "The request to get user location timed out." //The geolocation spend too much time 
			break;
		case error.UNKNOWN_ERROR:
			document.getElementById("message").innerHTML = "An unknown error occurred." // Other unknown reason 
			break;
	}
}

function onMapClick(e) {
		popup.setLatLng(e.latlng)
			 // The message of the coordinates you clicked
		     .setContent("The coordinates you clicked is " + e.latlng.toString())
			 // Display message of the coordinates on map
		     .openOn(displayMap);
}











function validateForm(){ //the components of validate the form in reistration.html
  var validation = true;
  validation &= validate();//validate the user name in form
  validation &= validatepassword();//validate the password and confirm password in form
  validation &= validategender();//validate the gender(radio)  in form
  validation &= validatebirth(); //validate the day of birth in form
  validation &= validatemail();//validate the email in form  
  validation &= validatephone();//validate the phone number in form
  validation &= validatecheckbox();//validate the checkbox in form
  return validation;
}
//validate the user name in form
function validate(form) {
	
	var user_name = document.getElementById("use_id").value;
	if (user_name == "" || user_name ==null){
		window.alert("No username entered.");//display the error message
		return false;
	}
}
function validatepassword(form){
	var input_password = document.getElementById("password_input").value;//get the value of password
	var input_password_check = document.getElementById("confirm_password_input").value;//get the value of confirm password
	if (input_password == "" || input_password ==null){//not password input
		window.alert("No password entered.");//display the error message
		return false;
	}
	else if (input_password_check == "" || input_password_check ==null){//not confirm password input
		window.alert("No password confirm entered.");//display the error message
		return false;	
		
	}
	else if (input_password_check != input_password){//the confirm password is not same as password
		window.alert("password confirm not same.");//display the error message
		return false;	
	}	
}

function validatecheckbox(form){

	if(!document.getElementById("confirmcheck").checked){//the checkbox is not checked 
		window.alert("Not confirm the register yet");//display the error message
		return false;
	}
}

function validategender(form){

	if(document.getElementById("male").checked){//the male radio is not checked 
		return true;
	}
	else if (document.getElementById("female").checked){//the female radio is not checked 
		return true;
	}
	else{
		window.alert("Not enter gender yet");//display the error message
		return false;//since both of radio not choose, false submit
	}
}



function validatebirth(form){
	var x = document.getElementById("birth_month").value//get the value of month of birth 
	var y = document.getElementById("birth_day").value//get the value of day of birth
	if (x == "0" || y == "0"){//if not choose the birth yet
		window.alert("No day of birth entered.");//display the error message
		return false;
	}	
}

function validatephone(form){
	var phone_num = document.getElementById("phone_num").value;//get the value of phone number
	if (phone_num == "" || phone_num ==null){//if there is no phone number
		window.alert("No phone entered.");//display the error message
		return false;
	}	
	else if (!(/^[0-9]{9}$/.test(phone_num))) {// phone_num is not a 9 digit number
		window.alert("Please enter 9 digit number in Phone number")//display the error message
		return false;
		}
}
function validatemail(form){
	var email_input = document.getElementById("email").value;//get the value of email
	if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email_input))) {// e is not an email address
		window.alert("No email entered.")//display the error message
		return false;
		}
	else if(email_input == "" || email_input ==null){
		window.alert("It is not email")//display the error message
		return false;
	}
}






