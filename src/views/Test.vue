<template lang="pug">
div test page
router-link(to="/") home
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}data/players/jake-carnevale.json`)

  const data = await response.json()

  console.log(data)
})
</script>
