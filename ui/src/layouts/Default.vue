<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/specials/">Specials</g-link>
        <span v-if="isLoggedIn" class="nav__link" @click="logout">Logout</span>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
    this.isAuthenticated = this.$auth.isAuthenticated();
  },
  computed: {
    isLoggedIn() {
      return this.isAuthenticated;
    },
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      isAuthenticated: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
