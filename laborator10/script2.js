function ridicarePatrat()
{
    var numar = document.getElementById("square-input").value;
    var result = numar* numar;
    var textnode = document.createTextNode(result+ " ");
    document.getElementById("solution").appendChild(textnode);

}

function jumatateNumar()
{
    var numar = document.getElementById("half-input").value;
    var result = numar/2;
    var textnode = document.createTextNode(result+ " ");
    document.getElementById("solution").appendChild(textnode);
}

function procent()
{
    var numar = document.getElementById("percent2-input").value;
    var procent = document.getElementById("percent1-input").value;
    var result = numar % procent;
    var textnode = document.createTextNode(result+ " ");
    document.getElementById("solution").appendChild(textnode);
}

function arieCerc()
{
    var raza = document.getElementById("area-input").value;
    var result = 3.14 * raza * raza;
    result = result.toFixed(0);
    var textnode = document.createTextNode(result+ " ");
    document.getElementById("solution").appendChild(textnode);
    
}

