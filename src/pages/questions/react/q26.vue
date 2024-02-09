<template>
  <h2>В чем разница между useMemo и useCallback</h2>
  <ul>
    <li>
      <p>
        <strong>useMemo</strong> используется для запоминания <strong
          >результата вычислений</strong
        >,
      </p>
      
        <p>
          а <strong>useCallback</strong> – для запоминания <strong
            >самой функции</strong
          >.
        </p>
      
    </li>
    <li>
      <p>
        <strong>useMemo</strong> кэширует вычисленное значение и возвращает его
        при
      </p>
      
        <p>последующих рендерах, если зависимости не изменились.</p>
      
    </li>
    <li>
      <p>
    useCallback кэширует саму функцию и возвращает тот же экземпляр,
      </p>
      
        <p>если зависимости не изменились.</p>
      
    </li>
  </ul>
</template>

<script>
export default {};
</script>
