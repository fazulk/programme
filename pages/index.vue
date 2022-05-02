<script lang="ts" setup>
const graphql = useStrapiGraphQL()

const {
  data: { products },
} = await graphql(`
  query {
    products {
      data {
        attributes {
          Name
          Price
        }
      }
    }
  }
`)

const { data: counter1 } = await useAsyncData('counter1', () =>
  $fetch('/api/counter')
)
</script>

<template>
  <div>
    counter: {{ counter1 }}<br />
    <ol>
      <li v-for="(r, i) in products.data" :key="i">
        {{ r.attributes.Name }} : {{ r.attributes.Price }}
      </li>
    </ol>
  </div>
</template>
