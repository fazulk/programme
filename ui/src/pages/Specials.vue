<template>
  <Layout>
    <div class="container max-w-none overflow-hidden">
      <h1>{{ status }}</h1>
      <div
        @click="one"
        class="mx-auto my-10 w-64 text-center uppercase font-bold"
      >
        Hello {{ user.given_name || user.name }}
      </div>
      <table class="table-auto mx-auto mb-4">
        <tbody>
          <tr @click="two">
            <td class="border px-4 py-2">Picture</td>
            <td class="border px-4 py-2"><img :src="user.picture" /></td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Given Name</td>
            <td class="border px-4 py-2">{{ user.given_name }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Family Name</td>
            <td class="border px-4 py-2">{{ user.family_name }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Name</td>
            <td class="border px-4 py-2">{{ user.name }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Nickname</td>
            <td class="border px-4 py-2">{{ user.nickname }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Email</td>
            <td class="border px-4 py-2">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-center mb-4">
        <button @click.prevent="logout">Logout</button>
      </div>
    </div>
  </Layout>
</template>
<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Profile",
  },

  data() {
    return {
      user: {},
      status: null,
    };
  },
  methods: {
    async one() {
      try {
        const results = await axios.get("http://localhost:3000/1");

        this.status = results.data;
      } catch (error) {
        console.log(error);
      }
    },
    async two() {
      try {
        const results = await axios.get("http://localhost:3000/2");

        this.status = results.data;
      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.$auth.logout();
    },
  },
  mounted() {
    if (!this.$auth.isAuthenticated()) {
      this.$auth.login();
    }
    this.user = this.$auth.user || {};
  },
};
</script>
