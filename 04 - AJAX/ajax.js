function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) { 
        var jsonObj = JSON.parse(this.responseText);
  
        for(var i = 0; i<this.responseText.length; i++){
          document.getElementById("Info").innerHTML += 
          "<b>Name: </b>" + jsonObj[i].name + "<br>" + 
          "<b>Email: </b>" + jsonObj[i].email + "<br>" +
          "<b>City: </b>" + jsonObj[i].address.city + "<br>" +
          "<b>Company Name: </b>" + jsonObj[i].company.name + "<br> <br>";
        }
      }
    };
   
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" , true);
    xhttp.send();
  }