<template>
<h2>Как вставить другой сайт на страницу</h2>
<p>Для вставки другого сайта на страницу, вы можете использовать тег
{{ `<iframe>` }}. Тег {{ `<iframe>` }} позволяет встраивать веб-страницу или внешний
контент внутрь текущей страницы. Просто укажите URL-адрес веб-страницы,
которую хотите встроить, в атрибуте src тега {{ `<iframe>` }}. Например:</p>

  
    <code-wrapper lang="xml">
            {{ `<iframe src=\"https://www.example.com\"\>\</iframe\>` }}
    </code-wrapper>


</template>

<script>

export default {};
</script>
