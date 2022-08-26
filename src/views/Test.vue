<template lang="pug">
div test page
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const response = await fetch('data/players/jake-carnevale.json')

  const data = await response.json()

  console.log(data)
})
</script>
