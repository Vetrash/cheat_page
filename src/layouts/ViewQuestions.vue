<template>
  <div class="viewerPage">
    <div class="viewerPage__logo">
      <div class="viewerPage__logo__row">
        <a href="/">{{ logoText }}</a> <span class="px-2">/</span>
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
      <v-btn
        class="menu_btn"
        @click="openBurgerMenu"
        color="grey-darken-4"
        variant="text"
        rounded="xs"
      >
        <img class="menu_btn__icon" src="../images\burger.svg" alt="menu"
      /></v-btn>
    </div>

    <div class="viewerPage__container">
      <div
        class="sidebar customScroll"
        :class="{ sidebar__hidden: !showBurgerMenu }"
      >
        <ul class="listQuestion pr-2">
          <li v-for="item in questions" :v-key="item.id">
            <button
              class="listQuestion__question"
              @click="selectQuestion(item.id)"
            >
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
    showBurgerMenu: false,
    logoText: "CHEAT_PAGE",
  }),
  created() {
    this.activeSection = this.typeList;
    this.questions = getListPage(this.activeSection);
    this.sections = getSections();
    window.addEventListener("resize", this.resize);
  },
  watch: {
    activeSection(newSection) {
      this.questions = getListPage(newSection);
      this.id = 1;
    },
  },
  methods: {
    resize() {
      const width = window.innerWidth;
      if (width <= 700) {
        this.logoText = "CP";
      } else {
        this.logoText = "CHEAT_PAGE";
      }
    },
    openBurgerMenu() {
      const width = window.innerWidth;
      if (width <= 700) {
        this.showBurgerMenu = !this.showBurgerMenu;
      } else {
        this.showBurgerMenu = false;
      }
    },
    selectQuestion(id) {
      console.log("id", id);
      this.openBurgerMenu();
      this.id = id;
    },
  },
};
</script>

<style lang="scss">
.menu_btn {
  padding: 5px !important;
  width: 50px !important;
  height: 50px !important;
  display: none !important;
  .menu_btn__icon {
    height: 40px;
    object-fit: contain;
  }

  @media screen and (width < 700px) {
    display: block !important;
  }
}

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
    .viewerPage__logo__row {
      flex: 1 1 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
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

    @media screen and (width < 700px) {
      display: block;
    }

    .sidebar {
      width: 300px;
      height: 100%;
      overflow: auto;
      transition: 1s;
      @media screen and (width < 700px) {
        width: 100%;
      }
    }
    .sidebar__hidden {
      @media screen and (width < 700px) {
        height: 0px;
        overflow: hidden;
        opacity: 0;
      }
    }

    .content {
      flex: 1;
      padding: 20px 20px 20px 5px;
      height: 100%;
      width: 100%;
      overflow: auto;
      @media screen and (width < 700px) {
        padding: 20px;
      }
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
