function Ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
         {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < response.length; i++) {
                output += "<tr><td>" + response[i].Slno + "</td><td>" + response[i].name + "</td><td>" + response[i].Quantity + "</td><td>" + response[i].Unit + "</td><td>" + response[i].Department + "</td><td>" + response[i].Notes + "</td></tr>"
            }
            document.getElementById("details").innerHTML = output;
        }
    }
    xhttp.open("GET", "gro1.json", true);
    xhttp.send();
}
