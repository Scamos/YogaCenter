<template>
  <!--Header-->
  <div class="head">
  <header class="header">
    <NuxtLink to="/" class="logo">
      <img src="/logo.png" alt="Yoga Center Logo" />
      <span>YOGA <span class="highlight">CENTER</span></span>
    </NuxtLink>
    <nav class="nav-links">
      <NuxtLink to="/about" class="nav-link">ABOUT US</NuxtLink>
      <NuxtLink to="/classes">OUR CLASSES</NuxtLink>
      <NuxtLink to="/teachers">OUR TEACHERS</NuxtLink>
      <NuxtLink to="/services">OUR SERVICES</NuxtLink>
    </nav>
  </header>
  </div>
</template>

<style scoped>
/* CSS per .header */
.head {
  font-family: 'Arial', sans-serif;
  color: #4b2e83;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2e5f5;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo img {
  width: 30px;
  margin-right: 0.5rem;
}

.highlight {
  color: #e24392;
}

.nav-links a {
  margin-left: 1rem;
  color: #4b2e83;
  text-decoration: none;
  font-weight: 500;
}
</style>
