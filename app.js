function newItem()
{
    console.log("Inside newItem");
    var item = document.getElementById("input").value; 
    console.log(item); 

    var ul = document.getElementById("list");
    
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(("- ") + item));

    ul.appendChild(li); 
    
    document.getElementById("input").value="";

    li.onclick = removeItem;

}

function removeItem(e)
{
    e.target.remove();
}

document.body.onkeyup = function(e) 
{
    if (e.keyCode == 13)
    {
        console.log("enter clicked!");
        newItem();  
    }
}

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x.toLocaleTimeString();
    tt=display_c();
 }
