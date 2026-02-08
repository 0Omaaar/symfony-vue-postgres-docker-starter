<script setup>
  import { onMounted, ref } from 'vue';
  const apiResponse = ref(null)

  onMounted(async () => {
    const res = await fetch("http://127.0.0.1:8000/api/ping")
    apiResponse.value = await res.json()
  })

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Response : {{ apiResponse }}
  </p>
</template>

<style scoped></style>
