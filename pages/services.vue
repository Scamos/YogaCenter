<template>
    <Header />
  <section id="services-top" class="services-hero">
    <Backbutton />
    <p class="services-subtitle">• WE PROVIDED TO YOU •</p>
    <h1 class="services-title">
      OUR <span class="highlight">SERVICES</span>
    </h1>
  </section>

  <section class="services-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
      <span class="dash">—</span> <a href="#services-top" class="current">OUR SERVICES</a>
    </nav>

    <div class="section-header">
      <p class="services-subtitle">• WHAT WE DO •</p>
      <h2 class="services-title">
        OUR <span class="highlight">SERVICES</span>
      </h2>
    </div>

    <div class="category-buttons">
      <button class="category-btn">
        <img src="/icons/indoor.svg" alt="Indoor Yoga" />
        INDOOR YOGA
      </button>
      <button class="category-btn active">
        <img src="/icons/all-yoga.svg" alt="All Yoga Classes" />
        ALL YOGA CLASSES
      </button>
      <button class="category-btn">
        <img src="/icons/outdoor.svg" alt="Outdoor Yoga" />
        OUTDOOR YOGA
      </button>
    </div>

    <div class="yoga-content">
      <div class="yoga-image"></div>
      <div class="yoga-info">
        <h3><img src="/icons/yoga-icon.svg" alt="" /> LET’S DO YOGA</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul class="yoga-list">
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
// Qui posso inserire fetch dinamici da Supabase in futuro
</script>

<style scoped>
.services-hero {
  background-color: #e7d5ee;
  padding: 5rem 2rem 3rem;
  text-align: center;
}

.services-subtitle {
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7e3f98;
  margin-bottom: 1rem;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #000;
}

.highlight {
  color: #e26aa5;
  font-weight: 500;
}

.breadcrumb {
  margin: 2rem auto;
  text-align: left;
  max-width: 1000px;
  font-size: 0.85rem;
  color: #333;
}

.breadcrumb .current {
  color: #7e3f98;
  font-weight: bold;
  text-decoration: underline;
}

.breadcrumb .dash {
  margin: 0 0.5rem;
  font-weight: bold;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.category-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  background-color: #f5effa;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: #7e3f98;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.category-btn.active {
  background-color: #7e3f98;
  color: white;
  position: relative;
}

.category-btn.active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #7e3f98;
}

.yoga-content {
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.yoga-image {
  width: 300px;
  height: 280px;
  background-color: #ccc;
}

.yoga-info {
  flex: 1;
}

.yoga-info h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #7e3f98;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.yoga-info p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.yoga-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.yoga-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  color: #333;
}
</style>