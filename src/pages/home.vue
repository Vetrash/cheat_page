<template>
  <div class="pageHome">
    <div class="pageHome__logo">CHEAT_PAGE <span class="px-2">/</span></div>
    <div class="pageHome__content customScroll">
      <h1 class="pl-5">Привет!</h1>
      <div class="pageHome__contentRow">
        <div class="w-50">
          <p class="pt-5">Это шпаргалка для собеседований!</p>
          <p>
            Здесь собраны ключевые моменты, которые надо знать, но которые могут
            выскочить из головы в самый неподходящий момент.
          </p>
          <p>
            Однако, будь в курсе, что информация, представленная здесь, может
            быть не всегда достоверной, актуальной или полной.
          </p>
          <p>
            Я делаю эти записи исключительно для себя, чтобы не потерять важные
            детали и иметь постоянный доступ к кратким ответам.
          </p>
          <p>
            <b>
              Большая часть материала сгенерирована нейросетью, сейчас я пытаюсь
              отфильтровать и переписать весь материал. А также дополнить все
              примерами.
            </b>
          </p>
          <p>
            Буду рад, если заметки окажутся полезными кому-то еще! Если у вас
            есть замечания или дополнения к материалам прошу сообщить в
            <a href="https://t.me/Vetrash">Telegram</a>
          </p>
        </div>
        <div class="line" />
        <div class="w-50">
          <h2 class="pl-5">Разделы:</h2>
          <div class="pageHome__section">
            <a
              :href="`/questions/?type=${section}`"
              v-for="(section, index) in sections"
              :v-key="index"
            >
              <v-btn
                class="w-100"
                color="grey-darken-4"
                variant="tonal"
                rounded="xs"
              >
                {{ section }}</v-btn
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSections } from "@/data/listPages.js";
export default {
  data() {
    return {
      sections: [],
    };
  },
  created() {
    this.sections = getSections();
  },
};
</script>

<style lang="scss">
.pageHome {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .pageHome__content {
    overflow: auto;
    padding: 50px;
    flex: 1 1 auto;
    p {
      padding: 5px 0px;
      text-align: justify;
    }
  }

  .pageHome__contentRow {
    justify-content: space-between;
    display: flex;
    flex-direction: row;

    .line {
      width: 2px;
      max-width: 2px;
      flex: 1 0 auto;
      margin: 0px 20px;
      background: gray;
      border-radius: 1px;
    }
  }

  .pageHome__section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 10px;
    justify-content: space-between;

    a {
      color: gray;
      min-width: 30%;
      display: block;
    }
  }

  .pageHome__logo {
    color: black;
    font-size: 20px;
    font-weight: bolder;
    background: gray;
    height: 68px;

    padding: 10px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;

    color: white;

    span {
      color: black;
      font-size: 20px;
      font-weight: bolder;
    }
  }
}
</style>
