<template>
  <div class="footer">
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>symbol</th>
            <th>Price</th>
            <th>% return</th>
            <th>Total net cost</th>
            <th>market value</th>
            <th>total gain</th>
            <th>daily gain</th>
            <th>% portfolio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              v-for="item in items"
              :key="item.index"
              :style="{ color: item.status }"
            >
              <span v-if="item.icon" class="mdi mdi-apple"></span
              >{{ item.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooTer",
  data() {
    return {
      items: [
        {
          name: "aapl",
          status: "neutral",
          icon: true,
        },
        {
          name: "$234.00",
          status: "neutral",
        },
        {
          name: "$45.43",
          status: " #00aaa8",
        },
        {
          name: "$1,234.00",
          status: "neutral",
        },
        {
          name: "$1,345.87",
          status: "neutral",
        },
        {
          name: "$456.34",
          status: " #00aaa8",
        },
        {
          name: "-$3.45",
          status: "#fb5253",
        },
        {
          name: "13.45%",
          status: "neutral",
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  margin-top: 2rem;
}
@media screen and (min-width: 1000px) {
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table thead tr th {
    padding: 12px 8px;
    vertical-align: top;
    text-align: right;
    text-transform: uppercase;
    color: var(--sec-text);
  }
  table thead tr th:nth-child(1) {
    text-align: left;
  }
  table tbody tr td {
    padding: 12px 8px;
    text-align: right;
  }
  table tbody tr {
    border-left: solid 5px #00aaa8;
  }
  table tbody tr td:nth-child(1) {
    text-align: left;
    text-transform: uppercase;
  }
  .mdi {
    padding: 0.5rem;
    border-radius: 50%;
    background: var(--banner-bg);
    margin-right: 0.3rem;
  }
}
</style>
