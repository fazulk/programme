<script lang="ts" setup>
const graphql = useStrapiGraphQL()

interface Products {
  data: {
    products: {
      data: [
        {
          attributes: {
            Name: string
            Price: string
          }
        }
      ]
    }
  }
}

const { data: products, refresh } = useAsyncData('products', () =>
  graphql<Products>(`
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
)

const { data: counter1 } = await useAsyncData('counter1', () =>
  $fetch('/api/counter')
)
</script>

<template>
  <div>
    <div>
      counter: {{ counter1 }}<br />
      <ol>
        <li v-for="(r, i) in products?.data.products.data" :key="i">
          {{ r.attributes.Name }} : {{ r.attributes.Price }}
        </li>
      </ol>
    </div>
    <br />
    <button @click.prevent="refresh()">Refresh</button>
  </div>
</template>
