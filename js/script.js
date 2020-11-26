// this is function for changing image on click in aboutme.html file

function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "http://www.roughguides.com/wp-content/uploads/2015/09/101-660x418.jpg") 
    {
        document.getElementById("imgClickAndChange").src = "http://www.hdnicewallpapers.com/Walls/Big/Temples/Meenakshi_Amman_Temple_in_India.jpg";
    }
    else if(document.getElementById("imgClickAndChange").src == "http://www.hdnicewallpapers.com/Walls/Big/Temples/Meenakshi_Amman_Temple_in_India.jpg" )
    {
        document.getElementById("imgClickAndChange").src = "https://risewiththia.files.wordpress.com/2017/10/coffee-morning-sunset.jpg?w=723";
    }
    else if(document.getElementById("imgClickAndChange").src == "https://risewiththia.files.wordpress.com/2017/10/coffee-morning-sunset.jpg?w=723" )
    {
        document.getElementById("imgClickAndChange").src = "https://cdn.quotesgram.com/img/76/86/687498546-god-couldnt-be-physically-with-us-so-he-gave-us-dogs-notice-dog-spelt-backwards-is-god-they-both-show-unconditional-love.jpeg";
    }
    else if(document.getElementById("imgClickAndChange").src == "https://cdn.quotesgram.com/img/76/86/687498546-god-couldnt-be-physically-with-us-so-he-gave-us-dogs-notice-dog-spelt-backwards-is-god-they-both-show-unconditional-love.jpeg" )
    {
        document.getElementById("imgClickAndChange").src = "https://ariennegorlach.files.wordpress.com/2012/04/3-best-qualities-word-cloud-wordle.jpg?w=1040";
    }
    else
    {
        document.getElementById("imgClickAndChange").src = "http://www.roughguides.com/wp-content/uploads/2015/09/101-660x418.jpg";
    }
}
//rateme.html


function addRow() {
    "use strict";
 
     var table = document.getElementById("table");
     var row= document.createElement("tr");
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");
     var td4 = document.createElement("td");     
 
     td1.innerHTML = document.getElementById("name").value;
     td2.innerHTML  = document.getElementById("skill").value;
     td3.innerHTML  = document.getElementById("level").value;
     td4.innerHTML  = document.getElementById("comment").value;
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);
 
     table.children[0].appendChild(row);
 }
