<template>
  <div class="mainbar">
    <div class="content">
      <div class="container">
        <div class="inner-content">
          <div class="icons">
            <input
              type="checkbox"
              id="theme-switch"
              class="theme-switch"
              v-model="lightMode"
              @click="toggleTheme"
            />
            <label for="theme-switch">
              <span v-if="lightMode === true">
                <span class="mdi mdi-moon-waning-crescent switch"></span>
              </span>
              <span v-else>
                <span class="mdi mdi-white-balance-sunny switch"></span>
              </span>
            </label>
          </div>
          <p class="mdi hide-on-sm stock">US Stock market opens in 3 hours</p>
          <div class="flex-item">
            <p class="hide-on-sm">
              Main Wallet <span class="mdi mdi-menu-down"></span>
            </p>
            <span class="mdi mdi-bell-outline tag"></span>
            <span class="mdi mdi-plus tag"></span>
          </div>
        </div>
        <MainCard class="main-card" />
      </div>
    </div>
    <HistoryCard />
    <Footer class="hide-on-sm" />
  </div>
</template>

<script>
import MainCard from "@/components/main_card.vue";
import HistoryCard from "@/components/history_card.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "MainBar",
  components: {
    MainCard,
    HistoryCard,
    Footer,
  },
  data() {
    return {
      lightMode: false,
    };
  },
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark");
    },
  },
};
</script>
<style scoped>
.mainbar {
  margin-bottom: 4rem;
}

.main-card {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 10;
}

.content {
  background: var(--banner-bg);
  border-radius: 0 0 0 50px;
  height: 220px;
  padding: 1rem;
  position: relative;
}

.inner-content {
  display: flex;
  justify-content: end;
  align-items: center;
}

.flex-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag {
  margin: 0 0 0 1rem;
}

.mdi-plus {
  background: var(--tag-bg);
  padding: 0.5rem 0.55rem;
  border-radius: 50%;
  color: var(--banner-bg) !important;
  font-weight: bolder;
}

.switch {
  color: var(--sec-text) !important;
}

p.mdi {
  color: var(--sec-text);
}

.icons input.theme-switch {
  display: none;
}
.icons input.theme-switch + label {
  cursor: pointer;
}
.icons input.theme-switch:not(:checked) + label:hover {
  cursor: pointer;
}
.icons input.theme-switch + label:active,
.icons input.theme-switch:checked + label {
  cursor: pointer;
}

@media screen and (min-width: 700px) {
  .mainbar {
    margin-left: 250px;
    margin-bottom: 2rem;
  }

  .mdi-plus {
    background: var(--tag-bg);
    padding: 0.5rem 0.55rem;
    border-radius: 50%;
    color: var(--white);
    font-weight: bolder;
  }

  .icons .mdi {
    margin-right: 0.5rem;
  }

  .flex-item {
    margin-left: 2rem;
  }
}

@media screen and (min-width: 1000px) {
  .mdi {
    font-size: 15px;
  }

  .flex-item {
    margin-left: 5rem;
  }

  .tag {
    margin: 0 0 0 2rem;
  }
}
</style>
