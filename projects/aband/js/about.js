/*--- about start show section ---*/
function showSection(id){
    if(!document.getElementsByTagName) return false;
    var sections = document.getElementsByTagName("section");
    for(var i = 0; i < sections.length ; i++){
        if(sections[i].getAttribute("id") != id){
            sections[i].style.display = "none";
        }else{
            sections[i].style.display = "block";
        }
    }
}

function prepareInternalnav(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var article = document.getElementsByTagName("article");
    if(article.length == 0) return 0;
    var nav = article[0].getElementsByTagName("nav");
    if(nav.length == 0) return 0;
    var links = nav[0].getElementsByTagName("a");
    for (var i = 0 ; i < links.length ; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId)) continue;
        if(i != 0)document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function(){
            showSection(this.destination);
            return false;
        }
    }
}
/*--- end start show section ---*/
addLoadEvent(prepareInternalnav);