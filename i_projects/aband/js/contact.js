function focusLabels(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var labels = document.getElementsByTagName("label");
    for(var i = 0 ; i < labels.length ; i++){
        if(labels[i].getAttribute("for")) continue;
        labels[i].onclick = function(){
            var id = this.getAttribute("for");
            var elem = document.getElementById(id);
            elem.focus();
        }
    }
}

function resetField(whichform){
        if(Modernizr.input.placeholder) return ;
    for(var i = 0 ; i < whichform.elements.length ; i++){
        var element = whichform.elements[i];
        if(element.type == "submit") continue;
        var check = element.placeholder || element.getAttribute("placeholder");
        if(!check) continue;
        element.onfocus = function(){
            var text = this.placeholder || this.getAttribute("placeholder");
            if(this.value == text){
                this.className = '';
                this.value = "";
            }
        }
        element.onblur = function(){
            if(this.value == ""){
                this.className = "placeholder";
                this.value = this.placeholder || this.getAttribute("placeholder");
            }
        }
        element.onblur();
    }
}

function prepareForms(){
    if(!document.getElementsByTagName("form")) return false;
    var forms = document.getElementsByTagName("form");
    for(var i = 0 ; i < forms.length ; i++){
        var thisform = forms[i];
        resetField(thisform);

        var str = "提交:<input type='submit' value='send'>"
        var divelem = document.createElement("div");
        divelem.innerHTML = str;
        thisform.appendChild(divelem);

        thisform.onsubmit = function(){
            if(!validateForm(this)) return false;
            var article = document.getElementsByTagName("article")[0];
            if(submitFormWithAjax(this,article)) return false;  //如果ajax可以执行,则不再提交表单
            return true;
        }
    }
}

function isFilled(field){
    if(field.value.replace(" ",'').length == 0) return false;
    var placeholder = field.placeholder || field.getAttribute("placeholder");
    return (field.value != placeholder);
}
function isEmail(field){
    return ((field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1));
}

function validateForm(whichForm){
    for(var i = 0 ; i < whichForm.elements.length ; i++){
        var elem = whichForm.elements[i];
        if(elem.required == 'required' || elem.getAttribute('required') == 'required'){
            if(!isFilled(elem)){
                alert("Please fill in the " + elem.name + " field.");
                return false;
            }
        }
        if(elem.type == "email" || elem.getAttribute("type") == "email"){
            if(!isEmail(elem)){
                alert("The " + elem.name + " field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

function submitFormWithAjax(whichform,thetarget){
    var request = getHttpObject();
    if(!request) {return false;}
    displayAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for(var i = 0 ; i < whichform.elements.length ; i++){
        element = whichform.elements[i];
        if(element.type != 'submit') {
            dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
        }
    }
    var data = dataParts.join('&');
    request.open("POST",whichform.getAttribute("action"),true);
    request.setRequestHeader("ContentType","application/x-www-form-urlencoded");
    request.onreadystatechange = function (){
        if(request.readyState == 4){
            console.log("readyState == 4 " );
            if(request.status == 200 ||request.status == 0){
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length > 0){
                    thetarget.innerHTML= matches[1];
                }else{
                    thetarget.innerHTML = '<p>Oops, there was an error . Sorry .</p>';
                }
            }else{
                thetarget.innerHTML = '<p>' + request.statusText +'</p>';
            }
        }
    }
    request.send(data);
    return true;
}

addLoadEvent(prepareForms);
addLoadEvent(focusLabels);
