<template>
  <h2>Как добавить ссылку которая будет открываться в новом окне</h2>
  <p>
    Для того чтобы ссылка открывалась в новом окне, вы можете использовать
    атрибут target со значением _blank внутри тега {{ '<a></a>' }}.
  </p>
  <p>Например:</p>

  <CodeWrapper lang="xml">
    <pre>
      {{ `<a href="https://www.example.com" target="_blank">Ссылка</a>` }}
    </pre>
  </CodeWrapper>
</template>

<script>
export default {};
</script>
