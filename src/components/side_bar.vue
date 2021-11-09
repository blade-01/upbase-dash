<template>
  <div class="sidebar">
    <div class="container">
      <div class="logo hide-on-sm">
        <img src="@/assets/img/user-female.svg" alt="avatar" />
        <div class="dets" v-if="user">
          <p>{{ user.name }}</p>
          <small>{{ user.email }}</small>
        </div>
      </div>
      <div class="icons">
        <ul>
          <li
            v-for="nav in navs"
            :key="nav.icon"
            :class="{ logout: nav.logout }"
          >
            <a href="#" :class="nav.icon"></a>
            <span class="hide-on-sm" :class="{ current: nav.current }">{{
              nav.name
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      user: {
        name: "Kristen Ramos",
        email: "kristenramos@gmail.com",
      },
      navs: [
        {
          icon: "mdi mdi-circle-slice-2",
          name: "Dashboard",
          current: true,
        },
        {
          icon: "mdi mdi-wallet-outline",
          name: "Holdings",
        },
        {
          icon: "mdi mdi-poll",
          name: "Performance",
        },
        {
          icon: "mdi mdi-logout",
          name: "Logout",
          logout: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: (10.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul li .mdi {
  font-size: 20px;
}
ul li span {
  cursor: pointer;
}
@media screen and (min-width: 700px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    padding: 1.5rem 1rem;
    border-radius: 0;
    border: none;
    background: var(--main-bg);
    height: 100vh;
    box-shadow: none;
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: (0);
  }
  ul {
    flex-direction: column;
    align-items: start;
  }
  li {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  li span {
    margin-left: 1rem;
  }
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5rem;
  }
  .logo img {
    width: 35px;
    border-radius: 10px;
    margin-right: 1rem;
  }
  .dets p {
    font-weight: bold;
  }
  .logout {
    position: fixed;
    bottom: 15px;
    left: 10px;
    padding: 0 1rem;
  }
  .current {
    border-bottom: solid 2px var(--chart-red);
    width: 20px;
  }
  span.current {
    padding-bottom: 0.3rem;
  }
}
</style>
