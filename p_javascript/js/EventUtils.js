/**
 * Created by Lenovo on 2016/6/16.
 */

/*
  EventUtil: for compatibility between DOM and IE
 */

var EventUtil = {
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type] = handler;
        }
    },
    //the removing handler must be the same name with addEventListener before. Anonymous handler can't be removed.
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }
    },
    stopPropagation:function(event){
       if(event.stopPropagation){
           event.stopPropagation();
       }else{
           event.cancelBubble = true;
       }
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //when keypress event,get the character
    getChar:function(event){
        //IE
        if(event.which == null){
            return String.fromCharCode(event.keyCode);
        }else if(event.which != 0 && event.charCode != 0){
            return String.fromCharCode(event.which);
        }else{
            return null;
        }
    }

}

/*Event DelegateUtil : delegate event to father for less memory consumption */
