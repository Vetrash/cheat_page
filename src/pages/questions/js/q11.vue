<template>
  <h2>Что такое замыкание в JavaScript</h2>
  <p>
    В JavaScript замыкание (closure) - это комбинация функции и лексического
    окружения, в котором эта функция была объявлена. Замыкание позволяет функции
    сохранять доступ к переменным из своего внешнего лексического окружения,
    даже после того, как это окружение было удалено.
  </p>
  <p>Небольшие примеры:</p>
  <CodeWrapper lang="javascript">
    <pre>
    function outerFunction() {
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
</pre
    >
  </CodeWrapper>
</template>

<script>
import CodeWrapper from "@/components/CodeWrapper.vue";

export default { components: { CodeWrapper } };
</script>
