<script setup>
const { find } = useStrapi4();
const response = await find("products");

</script>

<template>
  <div>

    HI
    <li v-for="(r, i) in response.data">
      {{ r.attributes.Name }}
    </li>
  </div>
</template>
