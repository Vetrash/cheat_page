<template>
  <h2>Для чего и как используется UseMemo</h2>
  <p>
    Хук <strong>useMemo</strong> используется для кэширования и запоминания
    результатов вычислений. В него передается функция, которая производит
    вычисления, и массив зависимостей. Хук будет пересчитывать значение только
    тогда, когда изменится одна из зависимостей – эта оптимизация помогает
    избежать ресурсозатратных вычислений при каждом рендере.
  </p>
</template>

<script>
export default {};
</script>
