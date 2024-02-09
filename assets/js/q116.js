import{_ as t,aO as e,o as c,b as r,a,w as u,F as s,d as n}from"./index.js";const l={components:{CodeWrapper:e}},i=n("h2",null,"Что такое замыкание в JavaScript",-1),_=n("p",null," В JavaScript замыкание (closure) - это комбинация функции и лексического окружения, в котором эта функция была объявлена. Замыкание позволяет функции сохранять доступ к переменным из своего внешнего лексического окружения, даже после того, как это окружение было удалено. ",-1),p=n("p",null,"Небольшие примеры:",-1),d=n("pre",null,`    function outerFunction() {
        var outerVariable = 'Hello';
            function innerFunction() {
                console.log(outerVariable);
            }
        return innerFunction;
    }

    var closure = outerFunction();
    closure(); // Вывод: Hello
    function createCounter() {
        var count = 0;
        return {
            increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
            }
        };
    }
    var counter = createCounter();
    counter.increment(); // Вывод: 1
    counter.increment(); // Вывод: 2
    counter.decrement(); // Вывод: 1
`,-1);function m(f,h,v,g,F,C){const o=e;return c(),r(s,null,[i,_,p,a(o,{lang:"javascript"},{default:u(()=>[d]),_:1})],64)}const V=t(l,[["render",m]]);export{V as default};
