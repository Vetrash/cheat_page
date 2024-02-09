<template>
  <div class="viewerPage">
    <div class="viewerPage__logo">
      <a href="/">CHEAT_PAGE</a> <span class="px-2">/</span>
      <v-select
        variant="underlined"
        flat
        v-model="activeSection"
        menu-icon="mdi-chevron-down"
        color="grey-darken-4"
        class="custom-select"
        :items="sections"
        :menu-props="{ contentClass: 'selectScroll', 'offset-y': true }"
      />
    </div>

    <div class="viewerPage__container">
      <div class="sidebar customScroll">
        <ul class="listQuestion pr-2">
          <li v-for="item in questions" :v-key="item.id">
            <button class="listQuestion__question" @click="id = item.id">
              {{ item.title }}
            </button>
          </li>
        </ul>
      </div>
      <div class="content customScroll">
        <keep-alive>
          <component :is="dynamicComponent" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { getListPage, getSections } from "@/data/listPages.js";
export default {
  computed: {
    dynamicComponent() {
      const id = this.id;
      const section = this.activeSection;
      return defineAsyncComponent(() =>
        import(`@/pages/questions/${section}/q${id}.vue`)
      );
    },
  },
  props: {
    typeList: null,
  },
  data: () => ({
    id: 1,
    componentId: null,
    questions: [],
    sections: [],
    activeSection: null,
  }),
  created() {
    this.activeSection = this.typeList;
    this.questions = getListPage(this.activeSection);
    this.sections = getSections();
  },
  watch: {
    activeSection(newSection) {
      this.questions = getListPage(newSection);
      this.id = 1;
    },
  },
};
</script>

<style lang="scss">
.viewerPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .viewerPage__logo {
    color: black;
    font-size: 20px;
    font-weight: bolder;
    background: gray;

    padding: 10px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      color: white;
    }
    span {
      color: black;
      font-size: 20px;
      font-weight: bolder;
    }
    .v-input__control {
      max-width: fit-content;
    }
    .v-field__input {
      padding: 0px !important;
    }
    .v-field__append-inner {
      padding: 0px !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .v-input__details,
    .v-field__outline {
      display: none;
    }
  }

  .viewerPage__container {
    display: flex;
    width: 100vw;
    height: 100%;
    overflow: hidden;

    .sidebar {
      width: 300px;
      height: 100%;
      overflow: auto;
    }

    .content {
      flex: 1;
      padding: 20px 20px 20px 5px;
      height: 100%;
      width: 100%;
      overflow: auto;
      h2 {
        padding: 00px 0px 30px 20px;
      }
      ul {
        padding-left: 5px;
        list-style: none;
        border-left: 2px solid gray;
      }
      li,
      p {
        text-indent: 20px;
        padding: 5px 0px;
        text-align: justify;
      }
      code {
        border-radius: 5px;
      }
    }
  }

  .listQuestion {
    list-style: none;
    color: black;
    padding-left: 5px;
    li {
      border-bottom: 1px solid gray;
    }
    li:last-child {
      border: none;
    }
    .listQuestion__question {
      color: black;
      text-decoration: none !important;
      transition: 0.5s;
      text-align: left;
      padding: 5px;
    }
    .listQuestion__question:hover {
      color: gray !important;
    }
  }
}
</style>
