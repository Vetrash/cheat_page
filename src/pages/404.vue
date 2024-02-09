<template>
  <div class="page404">
    <p class="page404__codeTitle">#404</p>
    <p class="page404__title">Хте я?!</p>
    <a href="/">
      <v-btn class="mt-5" color="grey-darken-4" variant="tonal" rounded="xs">
        На главную
      </v-btn>
    </a>
    <img class="page404__img" src="../images/dino404.png" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page404 {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .page404__codeTitle {
    font-size: 150px;
    font-weight: bold;
  }
  .page404__title {
    font-size: 40px;
    font-weight: bold;
  }
  .page404__img {
    position: absolute !important;
    height: 80vh;
    object-fit: contain;
    right: 0px;
    bottom: 0px;
  }
}
</style>
