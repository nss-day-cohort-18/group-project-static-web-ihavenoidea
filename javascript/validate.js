var uemail = document.registration.email;  

if(ValidateEmail(email))  

function ValidateEmail(email) {  

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat)){  

return true;  
}  

else {  

alert("You have entered an invalid email address!");  
email.focus();  
return false;  
}  
