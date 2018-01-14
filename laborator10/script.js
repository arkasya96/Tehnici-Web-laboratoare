
// ex 10.1
document.getElementById("story-button").addEventListener("click", makeStory);

function makeStory(){

    var places = document.getElementById("places").value;
    var adjective = document.getElementById("adjective").value;
    var person = document.getElementById("person").value;
    var textnode = document.createTextNode(person + " a vizitat " + adjective + " " + places);

    document.getElementById("story").appendChild(textnode);
}