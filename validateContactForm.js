function validateContactForm() {
    var em = document.forms["contactForm"]["email"].value; /* get the email & assign it to the variable em*/ 
	var n = em.includes("@");
    if (em == null || un == "") {
        alert("eMail must not be empty"); /* display an alert if the email field is left empty*/
        return false; /* return false to avoid posting*/
	
	else if(n != true){
        alert("eMail is invalid"); /* display an alert where email field does not contain @*/
        return false; /* return false to avoid posting*/
   
	
}
