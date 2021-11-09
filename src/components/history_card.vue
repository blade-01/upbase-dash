<template>
  <div class="history">
    <div class="container">
      <div class="history-content">
        <p>Portfolio History</p>
        <p>Per Industry</p>
      </div>
      <div class="history-cards">
        <div
          class="history-card"
          v-for="history in histories"
          :key="history.index"
        >
          <h2>
            <span class="current">{{ history.date }}</span>
          </h2>
          <img src="@/assets/img/line-chart.png" alt="chart" height="100" />
          <p>{{ history.itemName }}</p>
          <p>{{ history.price }}</p>
          <p :style="{ color: history.status }">
            <span :class="history.icon"></span> {{ history.percent }}
          </p>
        </div>
        <div class="chart">
          <div class="doughnut"></div>
          <span class="mdi mdi-circle-slice-2"></span>
          <div class="text">
            <p>07</p>
            <p>industries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryCard",
  data() {
    return {
      histories: [
        {
          date: "Nov 19",
          itemName: "Portfolio Value",
          price: "9,864.34",
          icon: "mdi mdi-arrow-up",
          percent: "234.23 (30.34%)",
          status: "#00aaa8",
        },
        {
          date: "Oct 19",
          itemName: "Portfolio Value",
          price: "7,845.32",
          icon: "mdi mdi-arrow-up",
          percent: "143.56 (15.43%)",
          status: "#00aaa8",
        },
        {
          date: "Sep 19",
          itemName: "Portfolio Value",
          price: "7,453.45",
          icon: "mdi mdi-arrow-down",
          percent: "-134.23 (-8.34%)",
          status: "#fb5253",
        },
      ],
    };
  },
};
</script>

<style scoped>
.history {
  margin-top: 22rem;
}

.history-content {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.history-content p:nth-child(2) {
  border-bottom: dashed 1px var(--pri-text);
  padding-bottom: 0.2rem;
}

.history-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
}

.history-card {
  border: solid 1px var(--sec-text);
  border-radius: 20px;
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  transition: background 0.4s ease;
}

.history-card:hover {
  background: var(--hover);
}

.history-card h2 {
  margin-bottom: 1rem;
  position: relative;
  text-transform: uppercase;
}

.history-card h2::after {
  content: "";
  position: absolute;
  width: 32px;
  height: 1px;
  left: 0;
  bottom: 0;
  border-bottom: solid 3px var(--sec-text);
}

.history-card p {
  padding: 0.2rem 0;
}

.history-card p:nth-child(4) {
  font-size: 30px;
  letter-spacing: 1px;
}

.chart {
  background: var(--blue);
  border-radius: 20px;
  padding: 1rem;
  width: 100%;
  position: relative;
  height: 260px;
}

.chart span {
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--main-bg);
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--main-bg);
  text-transform: uppercase;
}

.chart .text p:nth-child(1) {
  font-weight: bolder;
  font-size: 20px;
  padding-bottom: 0.2rem;
}

.doughnut {
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 10px solid #87d1f3;
  border-top: 10px solid #fb5253;
  border-left: 10px solid #bb6bda;
  border-right: 10px solid #00aaa8;
}

@media screen and (min-width: 700px) {
  .history {
    margin-top: 25rem;
  }
  .history-cards {
    flex-direction: row;
    align-items: end;
    justify-content: start;
    overflow: scroll;
  }
  .history-cards::webkit-scrollthumb {
    width: 0;
  }
  .history-card {
    margin-right: 0.5rem;
    height: 270px;
    margin-bottom: 0;
  }
  .chart {
    height: 270px;
  }
}

@media screen and (min-width: 1000px) {
  .history {
    margin-top: 8rem;
  }
  .history-cards {
    overflow: hidden;
  }
}
</style>
