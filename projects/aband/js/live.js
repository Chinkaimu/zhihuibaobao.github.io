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

//function displayAbbreviations(){
//    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
//    var abbreviations = document.getElementsByTagName("abbr");
//    if(abbreviations.length == 0) return false;
//
//    var dlist = document.createElement("dl");
//    for(var i = 0 ; i < abbreviations.length ; i++){
//        var curr_abbr = abbreviations[i];
//
//        var dttile = document.createElement("dt");
//        var dttile_text = document.createTextNode(curr_abbr.lastChild.nodeValue);
//        dttile.appendChild(dttile_text);
//
//        var ddescription = document.createElement("dd");
//        var ddescription_text = document.createTextNode(curr_abbr.getAttribute("title"));
//        ddescription.appendChild(ddescription_text);
//
//        dlist.appendChild(dttile);
//        dlist.appendChild(ddescription);
//    }
//
//    if(dlist.childNodes.length < 1) return false;
//    var header = document.createElement("h3");
//    var header_text = document.createTextNode("Abbreviations");
//    header.appendChild(header_text);
//
//    var articles = document.getElementsByTagName("article");
//    if(articles.length < 1) return false;
//
//    articles[0].appendChild(header);
//    articles[0].appendChild(dlist);
//}

function displayAbbreviations(){
     if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
        return false;

    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    var defs = new Array();

    for(var i = 0 ; i < abbreviations.length ; i++){
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 0) continue;
        var definition  = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for(key in defs){
      var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitile_text = document.createTextNode(key);
        dtitle.appendChild(dtitile_text);
        var desc = document.createElement("dd");
        var desc_text = document.createTextNode(definition);
        desc.appendChild(desc_text);
        dlist.appendChild(dtitile);
        dlist.appendChild(desc);
    }

    if(dlist.length < 1) return false;
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;
    var container = articles[0];
    container.appendChild(header);
    container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);