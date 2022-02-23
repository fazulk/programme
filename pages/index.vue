<script setup>
const { find } = useStrapi4();
const response = await find("products");
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
    <li v-for="(r, i) in products.data.products.data">
      {{ r.attributes.Name }}
    </li>
  </div>
</template>
