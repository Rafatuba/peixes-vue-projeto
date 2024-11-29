<script setup>
import { ref, computed } from "vue";

const peixes = ref([]);
const mensagem = ref(null);

fetch("/dados.json")
  .then((response) => response.json())
  .then((dados) => (peixes.value = dados))
  .catch((err) => (mensagem.value = err));
</script>

<template>
  <RouterLink
    v-for="(peixe, index) in peixes"
    :key="`peixe` + index"
    :to="`/peixe/` + peixe.id"
  >
    <div class="card">
      <img :src="peixe.url" alt="dourado" />
      <h1>{{ peixe.especie }}</h1>
      <p>
        {{ peixe.descricao }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  width: 300px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid goldenrod;
  border-radius: 10px;
}

.card:hover {
  animation: float 3s ease-in-out infinite;
  box-shadow: 3px 3px 5px gold;
}

.card:visited {
  color: #000;
}

img {
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

p {
  font-weight: 500;
  text-align: center;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
