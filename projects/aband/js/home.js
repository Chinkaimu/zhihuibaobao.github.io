
function prepareSlideShow(){
    console.log("prepareSlideShow");
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var intro = document.getElementById("intro");
    var slideShowDiv = document.createElement("div");
    slideShowDiv.setAttribute("id", "slideshow")
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/slideshow.gif");
    preview.setAttribute("alt", "a glimpse of what awaits you");
    preview.setAttribute("id", "preview");
    slideShowDiv.appendChild(preview);
    insertAfter(slideShowDiv,intro);

    var links = intro.getElementsByTagName("a");
    for(var i = 0; i < links.length ; i++){
        links[i].onmouseover = function(){
            destination = this.getAttribute("href");
            if(destination.indexOf("home.html") != -1){
                moveElement("preview",0,0,1)
            }
            if(destination.indexOf("about.html") != -1){
                moveElement("preview",-150,0,1)
            }
            if(destination.indexOf("photos.html") != -1){
                moveElement("preview",-300,0,1)
            }
            if(destination.indexOf("live.html") != -1){
                moveElement("preview",-450,0,1)
            }
            if(destination.indexOf("contact.html") != -1){
                moveElement("preview",-600,0,1)
            }
        }

    }
}
/*---- home end side show -----*/

    addLoadEvent(prepareSlideShow);
