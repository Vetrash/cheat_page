<template>
  <h2>Что такое менеджер состояний и с какими из них вы работали</h2>
  <p>
    Менеджер состояний – это инструмент или библиотека, которая помогает
    управлять состоянием приложения. Менеджер предоставляет централизованное
    хранилище или контейнер для хранения и управления данными, которые могут
    быть доступны и обновлены различными компонентами приложения.
  </p>
  <p>
    Менеджер состояния решает несколько задач. Во-первых, хорошей практикой
    является отделение данных и связанной с ними логики от компонентов.
    Во-вторых, при использовании локального состояния и передаче его между
    компонентами код может стать запутанным из-за возможности глубокой
    вложенности компонентов. При наличии глобального хранилища мы можем получать
    доступ к данным и изменять их из любого компонента.
  </p>
  <p>
    Роль менеджера состояний может исполнять React Context, но лучше
    использовать библиотеки Redux или MobX.
  </p>
</template>

<script>
export default {};
</script>
