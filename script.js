function temp()
{
    var c= document.getElementById("cel").value;
    var f = (c * 9/5) + 32
    document.getElementById("fah").value = f
}

function wgt()
{
    var kg= document.getElementById("kilo").value;
    var lbs= kg * 2.2
    document.getElementById("pound").value= lbs
}

function dist(){
    var km= document.getElementById("kilometer").value;
    var mil= km * 0.62137
    document.getElementById("miles").value = mil
}