<template>
  <h2>
    this и отличие this в function declaration и стрелочных функциях
  </h2>
  <p>
    this - это специальное ключевое слово в JavaScript, которое ссылается на
    объект, в контексте которого выполняется текущий код. Значение this зависит
    от контекста вызова функции и может быть разным в различных ситуациях.
  </p>
  <p>Функции (function declaration):</p>
  <ul>
    <li>
      <p>
        В функциях объявления значение this определяется во время выполнения
        функции, в зависимости от способа вызова функции.
      </p>
    </li>
    <li>
      <p>
        Если функция вызывается как метод объекта, то this ссылается на сам
        объект, на котором вызывается метод.
      </p>
    </li>
    <li>
      <p>
        Если функция вызывается как обычная функция, то this ссылается на
        глобальный объект (в браузере это объект window).
      </p>
    </li>
  </ul>
  <p>Стрелочные функции (arrow functions):</p>
  <ul>
    <li>
      <p>
        В стрелочных функциях значение this определяется лексически, оно берется
        из окружающего контекста, в котором функция была определена.
      </p>
    </li>
    <li>
      <p>
        Стрелочные функции не имеют своего собственного this, поэтому они не
        создают новый контекст this и не зависят от способа вызова.
      </p>
    </li>
    <li>
      <p>
        Вместо этого, this в стрелочных функциях ссылается на this окружающего
        контекста.
      </p>
    </li>
  </ul>
</template>

<script>
export default {};
</script>
