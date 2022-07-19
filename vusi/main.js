document.getElementById("myImage").style.display = "none";

const me = {
    Image: "./noir.jpg",
    Name: "Black Noir",
}

function showDetails(){
    document.getElementById("myImage").style.display = "block"
     document.getElementById("myImage").src = me.Image;
     document.getElementById("myImage").alt = me.Name;
     document.getElementById("details").innerHTML = "Name: " + me.Name;
}