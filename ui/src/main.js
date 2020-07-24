// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import AuthPlugin from "./plugins/auth";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(AuthPlugin);

  router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (
      to.path != "/p/" &&
      to.path !== "/specials" &&
      to.path !== "/p/details"
    ) {
      next();
    } else if (router.app.$auth.isAuthenticated()) {
      // if authenticated allow access

      if (from.name !== null) {
        if (from.query._storyblok) {
          return next(false);
        }
      }
      next();
    } else {
      // trigger auth0's login
      console.log("User Login");
      router.app.$auth.login();
    }
  });
}
