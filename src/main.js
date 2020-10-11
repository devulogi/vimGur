import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import AuthHandler from "./components/AuthHandler.vue";
import ImageList from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

const routes = [
  {
    path: "/",
    component: ImageList,
  },
  {
    path: "/upload",
    component: UploadForm,
  },
  {
    path: "/oauth2/callback",
    component: AuthHandler,
  },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");