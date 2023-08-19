<template>
  <div class="navbar">
    <NuxtLink class="navbar__logo" to="/">Vue 3</NuxtLink>
    <div class="navbar__btns">
      <NuxtLink to="/posts">Posts</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
h2 {
  cursor: pointer;
  color: teal;
}
.navbar {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: paleturquoise;
}

.navbar__logo {
  font-weight: 700;
  font-size: 25px;
}

.navbar__btns {
  font-size: 20px;
  display: flex;
  gap: 10px;
}
</style>
