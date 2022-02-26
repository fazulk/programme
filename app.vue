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

const { data: counter1 } = await useAsyncData("counter1", () =>
  $fetch("/api/counter")
);
const { data: counter2 } = await useAsyncData("counter2", () =>
  $fetch("/api/counter2")
);
</script>

<template>
  <div>
    counter1: {{ counter1 }}<br />
    counter2: {{ counter2 }}
    <!-- <li v-for="(r, i) in products.data.products.data">
      {{ r.attributes.Name }}
    </li> -->
  </div>
</template>
