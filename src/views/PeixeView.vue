<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const peixeId = route.params.id;

const peixes = ref(null);
const mensagem = ref(null);

fetch("/dados.json")
  .then((response) => response.json())
  .then((dados) => {
    peixes.value = dados.find((peixe) => peixe.id == peixeId);
  })
  .catch((err) => (mensagem.value = err));
console.log(peixes);
</script>

<template>
  {{ mensagem }}
  <section>
    <div class="container">
      <h1>{{ peixes?.especie }}</h1>
      <h3>{{ peixes?.descricao }}</h3>
      <img :src="peixes.url" alt="" />
      <p>{{ peixes?.texto }}</p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 30px;
}

.container h1 {
  font-size: 40px;
}

.container h3 {
  font-size: 30px;
}

.container p {
  font-size: 24px;
}

@media (max-width: 767px) {
  .container {
    width: 100%;
  }

  .container h1 {
    font-size: 30px;
  }

  .container h3 {
    font-size: 20px;
  }

  .container img {
    width: 100%;
  }

  .container p {
    font-size: 18px;
  }
}
</style>
