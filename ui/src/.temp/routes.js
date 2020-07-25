const c1 = () => import(/* webpackChunkName: "page--src-pages-p-details-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\p\\details.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-specials-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Specials.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-p-index-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\p\\Index.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-callback-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Callback.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "J:\\webz\\programme\\ui\\node_modules\\gridsome\\app\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Index.vue")

export default [
  {
    path: "/p/details/",
    component: c1
  },
  {
    path: "/specials/",
    component: c2
  },
  {
    path: "/p/",
    component: c3
  },
  {
    path: "/callback/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
