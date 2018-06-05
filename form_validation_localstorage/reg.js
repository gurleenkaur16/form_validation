var list = [];

if(localStorage.myuser){
		list = JSON.parse(localStorage.myuser);
		for(i=0;i<list.length;i++){
			display(list[i]);
	}
		
}

function ValidateContactForm()
{
    var Fname = document.ContactForm.Fname;
    var Lname = document.ContactForm.Lname;
	var Mobile = document.ContactForm.Mobile;
    var email = document.ContactForm.Email;
	var gender = document.ContactForm.gender;
    
	
    
var isvalidate=true;
    if (Fname.value == "")
    {
        document.getElementById("fname").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
        Fname.focus();
        isvalidate = false;
    }else{
			document.getElementById("fname").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}
	
	if(Lname.value == ""){
		
		document.getElementById("lname").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
	    Lname.focus();
        isvalidate = false;
	}else{
		document.getElementById("lname").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}
    
	
	if(Mobile.value == "" || isNaN(Mobile.value))
   {
	document.getElementById("mobile").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
	Mobile.focus();
	isvalidate = false;
   }else{
	document.getElementById("mobile").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}


	
    if (email.value == "")
    {
        document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
        email.focus();
        isvalidate = false;
    }
	else{
	document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}
	if(email.value.indexOf("@", 0) < 0){
	
		document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
        email.focus();
        isvalidate = false;
	}else{
	document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}
	
    if(email.value.indexOf(".", 0) < 0){
		document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
        email.focus();
        isvalidate = false;
	}
else{
	document.getElementById("emailMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}
	

	if ( ( document.ContactForm.gender[0].checked == false ) && ( document.ContactForm.gender[1].checked == false )&& ( document.ContactForm.gender[2].checked == false ) ) 
	{
	//alert ( "Please choose your Gender" ); 
	document.getElementById("genderMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/>";
	
	isvalidate = false;
	}else{
	document.getElementById("genderMsg").innerHTML = "<img src='http://www.javatpoint.com/javascriptpages/images/checked.gif'/>";
	}


if(isvalidate){
	user= {Firstname:Fname.value, Lastname:Lname.value, Mobile:Mobile.value, Email:email.value, Gender:gender.value}
	list.push(user); 
 	localStorage.myuser= JSON.stringify(list);
 	display(user);
 	document.getElementById("myForm").reset();

 }else{
 	return false;
 }
}

function display(user){
var table = document.getElementById("recordTable");
   
  
   
    var row = table.insertRow(-1);
	var cellFname = row.insertCell(0);
    var cellLname = row.insertCell(1);
	var cellMobile = row.insertCell(2);
    var cellEmail = row.insertCell(3);
	var cellGender = row.insertCell(4);
	
    cellFname.innerHTML = user.Firstname;
    cellLname.innerHTML = user.Lastname;
	cellMobile.innerHTML = user.Mobile;
	cellEmail.innerHTML = user.Email;
	cellGender.innerHTML = user.Gender;

	} 
          