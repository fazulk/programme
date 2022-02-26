<script setup>
// const graphql = useStrapiGraphQL();
// const { data: products } = await useAsyncData("products", () =>
//   graphql(`
//     query {
//       products {
//         data {
//           id
//           attributes {
//             Name
//           }
//         }
//       }
//     }
//   `)
// );

const { data } = await useAsyncData("count", () => $fetch("/api/counter"));
const { data: counter2 } = await useAsyncData("count", () =>
  $fetch("/api/counter2")
);
</script>

<template>
  <div>
    counter1: {{ data }}<br />
    counter2: {{ counter2 }}
    <!-- <li v-for="(r, i) in products.data.products.data">
      {{ r.attributes.Name }}
    </li> -->
  </div>
</template>
