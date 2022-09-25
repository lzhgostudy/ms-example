import Vue from "vue";
import OfsUI from "ofs-ui";
import "./styles/ofs-variables.scss";
import router from "./router/index";
import App from "./App.vue";

import("mscomponents/styles");

Vue.config.productionTip = false;

Vue.use(OfsUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
