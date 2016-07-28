/******************1.构造器实例*********************/
var exMessage = {
    name:"Hello Vue.js!"
};

var exampleVM = new Vue({
    el:"#app",
    data:exMessage
});

/******************2.计算属性*************************/
new Vue({
    el:"#example1",
    data:{
        a:1
    },
    computed:{
        //一个计算属性的getter
        b:function(){
            //'this'指向vm实例
           return this.a+1;
        } //b下面还可以设置getter，setter方法。默认的是getter
    }
});

/*******************3.计算属性$watch************************/
var vm =new Vue({
    el:"#example2",
    data:{
        firstName:"Foo",
        lastName:"Bar",
        fullName:"Foo Bar"
    }
});

vm.$watch('firstName',function(val){
    this.fullName = val + ' ' + this.lastName;
});

vm.$watch("lastName",function(val){
    this.fullName = this.firstName + " " + val;
});

/**************4.v-bind:class,v-bind:style使用****************/
var vm1 = new Vue({
    el:"#example3",
    data:{
        isA:true,
        isB:true,
        classA:"redcolor",
        classB:"exfont"
    }
});

/**************5.条件渲染****************/
var vm2 = new Vue({
    el:"#example4",
    data:{
        ok:true
    }
});

/**************6.列表渲染****************/
var vm3 = new Vue(
    {
        el:"#example5",
        data:{
            items:[
                {message:"Foo"},
                {message:"Bar"}
            ]
        }
    }
);
//数组变动检测
//变异方法
vm3.items.push({message:"chm"});
vm3.items.reverse();
//替换数组concat,slice,filter返回新数组
vm3.items = vm3.items.filter(function (item) {
    return item.message.match(/Foo/)
});

/**************7.方法与事件处理****************/
var vm4 = new Vue({
    el:"#example6",
    data:{
        name:"chm"
    },
    methods:{
        greet:function(event){
            alert("hello " + this.name);
            alert("event.target = " + event.target.tagName);
        }
    }
});

/**************8.表单控件绑定****************/
var vm5 = new Vue({
    el:"#example7",
    data: {
        checked:true,
        checkedNames: [],
        a:"herea",
        b:"hereb"
      }
});

/**************9.过渡****************/
var vm6 = new Vue({
    el:"#example8",
    data:{
        show:true,
        ok:true,
        transitionName:"expand1"
    }
});

Vue.transition('expand1', {

    beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
    },
    enter: function (el) {
        el.textContent = 'enter'
    },
    afterEnter: function (el) {
        el.textContent = 'afterEnter'
    },
    enterCancelled: function (el) {
        // handle cancellation
    },

    beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
    },
    leave: function (el) {
        el.textContent = 'leave'
    },
    afterLeave: function (el) {
        el.textContent = 'afterLeave'
    },
    leaveCancelled: function (el) {
        // handle cancellation
    }
});
//自定义过渡类名
Vue.transition('bounce', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
});

new Vue({
    el: '#demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    }
})
