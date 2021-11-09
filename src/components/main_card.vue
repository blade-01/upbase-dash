<template>
  <div class="cards">
    <div class="card box-shadow">
      <h2>Upgrade your Account</h2>
      <div class="flex-content">
        <img src="@/assets/img/user-phone.png" alt="illustration" />
        <p>Access many other features and helpful insights.</p>
      </div>
      <span class="mdi mdi-arrow-right arrow"></span>
    </div>
    <div class="card box-shadow">
      <div class="days">
        <p v-for="day in days" :key="day.index">{{ day }}</p>
        <span class="mdi mdi-currency-usd"></span>
      </div>
      <bar-chart />
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/bar_chart.vue";
export default {
  name: "HistoryCard",
  components: {
    BarChart,
  },
  data() {
    return {
      days: ["1d", "1m", "1y", "All"],
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  margin-top: 2rem;
}

.cards .card {
  background: var(--main-bg);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  position: relative;
}

.card:nth-child(1) h2 {
  text-align: center;
}

.card:nth-child(1) p {
  color: var(--sec-text);
  font-size: 12px;
  font-weight: bold;
  flex-basis: 60%;
}

.card:nth-child(1) img {
  position: relative;
  left: -30px;
  bottom: -25px;
  width: 150px;
  flex-basis: 40%;
}

.flex-content {
  display: flex;
  justify-content: start;
  align-items: center;
}

.arrow {
  background: var(--tag-bg);
  padding: 0.5rem 0.55rem;
  border-radius: 5px;
  color: var(--banner-bg) !important;
  font-weight: bolder;
  position: absolute;
  right: 20px;
  bottom: 15px;
}

.days {
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--sec-text);
}

.days p {
  margin-right: 2rem;
}

.days p:nth-child(1) {
  font-weight: bold;
  padding: 0.3rem;
  border: solid 1px var(--pri-text);
  border-radius: 5px;
  color: var(--pri-text);
}

@media screen and (min-width: 700px) {
  .mainbar {
    margin-left: 250px;
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

  .card:nth-child(1) p {
    font-size: 15px;
  }

  .card:nth-child(1) img {
    width: 180px;
  }
}

@media screen and (min-width: 800px) {
  .card:nth-child(1) p {
    font-size: 20px;
  }
}

@media screen and (min-width: 1000px) {
  .flex-content {
    align-items: start;
  }

  .cards {
    flex-direction: row;
  }

  .card:nth-child(1) {
    margin-right: 2rem;
    flex-basis: 40%;
  }

  .card:nth-child(2) {
    flex-basis: 60%;
  }

  .card:nth-child(1) p {
    margin-top: 2rem;
    font-size: 15px;
    width: 150px;
  }

  .card:nth-child(1) img {
    left: -50px;
    bottom: -25px;
  }

  .arrow {
    background: var(--tag-bg);
    padding: 0.5rem 0.55rem;
    border-radius: 5px;
    color: var(--white);
    font-weight: bolder;
    position: absolute;
    right: 20px;
    bottom: 15px;
  }
}
</style>
