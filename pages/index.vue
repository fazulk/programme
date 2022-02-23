<script setup>
const { find } = useStrapi4();
const response = await find("products");
const graphql = useStrapiGraphQL();

const products = await graphql(`
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
`);
</script>

<template>
  <div>
    {{ products.data.products.data }}
    HI
    <li v-for="(r, i) in products.data.products.data">
      {{ r.attributes.Name }}
    </li>
  </div>
</template>
