
/**
 * Created by chm on 12/30/15.
 */
//function preparePlace(){
//    if(!document.getElementById) return false;
//    if(!document.getElementsByTagName) return false;
//
//    var photoContainer = document.createElement("div");
//    photoContainer.setAttribute("id","photoContainer");
//    var imagegallery = document.getElementById("imagegallery");
//    insertAfter(photoContainer,imagegallery);
//
//    var img_place = document.createElement("img");
//    img_place.setAttribute("id","display_img");
//    img_place.setAttribute("src","");
//    img_place.setAttribute("alt","请选择图片")
//    photoContainer.appendChild(img_place);
//}
//
//function isShow(picture){
//    if(!document.getElementById("display_img")) return true;
//    var img_place = document.getElementById("display_img");
//    img_place.setAttribute("src",picture);
//    return false;
//}
//
//function display(){
//    if(!document.getElementById) return false;
//    if(!document.getElementsByTagName) return false;
//
//    var imagegellery = document.getElementById("imagegallery");
//    var links = imagegellery.getElementsByTagName("a");
//    console.log("links "  + links);
//
//    for(var i=0 ; i < links.length ; i++){
//        console.log("click monitor");
//        links[i].onclick = function(){
//            var link_img = this.getAttribute("href");
//            return isShow(link_img);
//        }
//    }
//}

//优化后代码
function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;

    if(!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var desctext = document.createTextNode("Choose a picture");
    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

function showPic(whicphic){
    if(!document.getElementById("placeholder")) return true;

    var placeholder = document.getElementById("placeholder");
    var source = whicphic.getAttribute("href");
    placeholder.setAttribute("src",source);

    if(!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    if(whicphic.getAttribute("title")){
        var title = whicphic.getAttribute("title");
    }else{
        title="";
    }
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = title;
    }
    return false;
}

function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;

    var imagegellery = document.getElementById("imagegallery");
    var links = imagegellery.getElementsByTagName("a");

    for(var i=0 ; i < links.length ; i++){
        links[i].onclick = function(){
            return showPic(this);
        }
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);