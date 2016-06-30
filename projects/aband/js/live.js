function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i = 0 ; i < tables.length ; i++ ){
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for(var j = 0 ; j < rows.length ; j++ ){
            if(odd == true){
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}

function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i = 0 ; i < tables.length ; i++ ) {
        var rows = tables[i].getElementsByTagName("tr");
        for(var j = 0 ; j < rows.length ; j++ ) {
          rows[j].oldClassName = rows[j].className;
          rows[j].onmouseover = function(){
              addClass(this,"highlight");
          }
          rows[j].onmouseout = function(){
                this.className = this.oldClassName;
            }
        }
    }
}

function displayAbbreviations(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length == 0) return false;

    var dlist = document.createElement("dl");
    for(var i = 0 ; i < abbreviations.length ; i++){
        var curr_abbr = abbreviations[i];

        var dttile = document.createElement("dt");
        var dttile_text = document.createTextNode(curr_abbr.lastChild.nodeValue);
        dttile.appendChild(dttile_text);

        var ddescription = document.createElement("dd");
        var ddescription_text = document.createTextNode(curr_abbr.getAttribute("title"));
        ddescription.appendChild(ddescription_text);

        dlist.appendChild(dttile);
        dlist.appendChild(ddescription);
    }

    if(dlist.childNodes.length < 1) return false;
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    var articles = document.getElementsByTagName("article");
    if(articles.length < 1) return false;

    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);