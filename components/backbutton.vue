<template>
  <!--Pulsante per tornare indietro-->
  <section class="backbutton">
    <button @click="goBack" class="back-button">← BACK</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.backbutton {
  text-align: center;
  padding: 1px 1px;
}
.back-button {
    cursor: pointer;
  display: inline-block;
  margin-bottom: 15px;
  color: #8a00a0;
  font-weight: bold;
  text-decoration: none;
}
</style>