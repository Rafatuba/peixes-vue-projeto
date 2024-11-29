<script setup></script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/pescaesportiva">Pesca Esportiva</RouterLink>
    </nav>

    <img alt="Vue logo" class="logo" src="@/assets/banner.png" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 20px;
}

nav a {
  font-size: 20px;
  padding: 2px 7px;
  border-radius: 5px;
}

nav a:hover {
  background-color: rgba(252, 252, 252, 0.4);
}

.logo {
  width: 100%;
}

@media (max-width: 767px) {
  nav {
    position: initial;
  }

  header {
    flex-direction: column-reverse;
  }
}
</style>
