<template>
  <h2>Как обрабатывать асинхронные действия в Redux Thunk</h2>
  <p>
    Для обработки асинхронных действий в <strong>Redux Thunk</strong> необходимо
    выполнить следующие шаги:
  </p>
  <ul>
    <li>
      <p>Импортировать Redux Thunk как middleware.</p>
    </li>
    <li>
      <p>Учесть, что создатели действия должны возвращать функцию вместо</p>
      
        <p>
          простого объекта. Эта функция должна принимать
          параметр <strong>dispatch</strong> и вызывать его с новым объектом
          действия.
        </p>
      
    </li>
    <li>
      <p>Внутри этой функции можно использовать асинхронные операции, такие</p>
      
        <p>как fetch или API вызовы.</p>
      
    </li>
    <li>
      <p>Когда асинхронная операция завершится, необходимо вызвать</p>
      
        <p>
          метод dispatch с новым объектом действия, который содержит
          результат операции.
        </p>
      
    </li>
  </ul>
</template>

<script>
export default {};
</script>
