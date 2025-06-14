<script setup>
import { onMounted, ref } from 'vue';

let products = ref(null);

async function getProducts() {
  return fetch(
      'http://localhost:3000/products',
      { headers: { 'Content-Type': 'application/json' } }
  ).then(res => res.json())
}

onMounted(() => {
//  setTimeout(() => {
    getProducts().then((res) => products.value = res)
//  }, 1000);
})

</script>

<template>
  <template v-if="products == null">
    loading...
  </template>
  <ul v-else>
    <li v-for="{title, category, price, stock} of products">
      [{{category}}] <b>{{title}}</b> - {{price}}р. ({{stock}} шт.)
    </li>
  </ul>
</template>
