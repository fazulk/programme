<script setup>
const { data } = await useAsyncData("count", () => $fetch("/api/counter"));
const graphql = useStrapiGraphQL();
const { data: products } = await useAsyncData("products", () =>
  graphql(`
    query {
      products {
        data {
          id
          attributes {
            Name
          }
        }
      }
    }
  `)
);
</script>

<template>
  <div>
    counter: {{ data }}
    <li v-for="(r, i) in products.data.products.data">
      {{ r.attributes.Name }}
    </li>
  </div>
</template>
