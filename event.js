function validateForm() {
  var regx = /^[A-Za-z][-a-zA-Z ]+$/;
   var ename = document.forms["myForm"]["ename"].value;
   var edate = document.forms["myForm"]["edate"].value;
   var location=document.getElementById('location').value;
   var tarea=document.forms["myForm"]["tarea"].value;
   var rbtn=document.forms["myForm"]["attendance"].value;
    
    if(ename=="")
    {
      alert("Event Name must be filled out");
      return false;
    }
    else if(!regx.test(ename))
    {
        alert("Event Name must contains character only");
       return false;
    }
    if (edate == "" || edate == null) {
    alert("Date must be filled out");
    return false;
  }
  
  if (location=="Location") {
    alert("Location must be selected");
    return false;
  }
  if (tarea == "" || tarea == null) {
    alert("Description must be filled out");
    return false;
  }
   if (rbtn== "" || rbtn == null) {
    alert("Event Attendance must be selected");
    return false;
  }
  }