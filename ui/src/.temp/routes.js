const c1 = () => import(/* webpackChunkName: "page--src-pages-specials-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Specials.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-callback-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Callback.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "J:\\webz\\programme\\ui\\src\\pages\\Index.vue")

export default [
  {
    path: "/specials/",
    component: c1
  },
  {
    path: "/callback/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
