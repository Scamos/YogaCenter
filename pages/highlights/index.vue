<template>
    <div class="highlights-page">
    <Header />
    <!-- Titolo -->
    <section class="hero">
      <Backbutton />
      <p class="subheading">DISCOVER OUR CLASSES</p>
      <h1>OUR <span class="highlight-text">HIGHLIGHTS</span></h1>
    </section>

    <!-- Breadcrumb -->
     <section class="classes-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
        <span class="dash">—</span>
        <NuxtLink to="/classes" class="breadcrumb-link">OUR CLASSES</NuxtLink>
        <span class="dash">—</span>
        <a href="#classes-top" class="current">HIGHLIGHTS</a>
    </nav>
    </section>

    <!-- Barra di ricerca e filtri -->
<div class="filter-bar">
  <input
    type="text"
    placeholder="Search highlights..."
    class="search-input"
    v-model="search"
  />
  <div class="category-filters">
    <button
      v-for="(cat, i) in ['All', ...categories]"
      :key="i"
      :class="['filter-btn', { active: selectedCategory === cat }]"
      @click="selectedCategory = cat"
    >
      {{ cat }}
    </button>
  </div>
</div>

    <!-- Contenuto Principale -->
    <div class="container">
      <!-- Lista di classi Highlight -->
      <div class="highlights-list">
        <div v-for="item in filteredHighlights" :key="item.id" class="highlight-card">
          <div class="image-placeholder">
            <span class="category-label">MEDITATION</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p class="description">{{ item.description }}</p>
          <p class="teacher">👤 Teacher: {{ item.teacher }}</p>
          <div class="meta">
            <span>📅 {{ item.date }}</span>
            <span>🕒 {{ item.time }}</span>
            <NuxtLink :to="`/highlight`" class="read-more">READ MORE →</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Barra laterale
      <aside class="sidebar">
        <div class="search-box">
          <label>SEARCH CLASS</label>
          <div class="search-input">
            <input type="text" placeholder="Search Here" />
            <span class="search-icon">🔍</span>
          </div>
        </div>

        <div class="categories">
          <label>CATEGORIES</label>
          <ul>
            <li v-for="cat in categories" :key="cat" :class="{ active: cat === 'Meditation' }">
              ✴ {{ cat }}
            </li>
          </ul>
        </div>
      </aside>
       -->
    </div>

    <Footer />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const selectedCategory = ref('All')

const filteredHighlights = computed(() => {
  return highlights.filter((cls) =>
    (selectedCategory.value === 'All' || cls.category === selectedCategory.value) &&
    cls.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const highlights = [
  {
    id: 1,
    title: "Yoga For The Mind",
    category: "Meditation",
    description: "Yoga is the practice of quieting the mind. You need to convince.",
    teacher: "Anna Laurent",
    date: "May 30, 2025",
    time: "08:00 AM - 10:30 AM",
  },
  {
    id: 2,
    title: "Yoga Together",
    category: "Seminar",
    description: "Work together is essential for small teams challenge.",
    teacher: "Warren Hunt",
    date: "May 19, 2025",
    time: "09:00 AM - 11:00 AM",
  },
  {
    id: 3,
    title: "Mindful Moments",
    category: "Meditation",
    description: "Learn to pause, breathe, and reconnect with your inner peace.",
    teacher: "Isabelle Grant",
    date: "May 13, 2025",
    time: "10:00 AM - 12:00 PM",
  },
];

const categories = [
  "Retreat",
  "Meditation",
  "Yoga",
  "Fitness",
  "Nature",
  "Seminar",
  "Training",
  "Workshop",
];
</script>

<style scoped>
.highlights-page {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Sezione Titolo */
.hero {
  background-color: #f2e7fa;
  text-align: center;
  padding: 3rem 1rem;
}
.hero .subheading {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: #a259c3;
  margin-bottom: 0.5rem;
}
.hero h1 {
  font-size: 2.5rem;
  font-weight: 300;
}
.highlight-text {
  font-weight: bold;
  color: #e445ae;
}

/* Breadcrumb */
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

/* Contenuto Principale */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 1.5rem;
}

/* Lista di Classi Highlight */
.highlights-list {
  flex: 1 1 70%;
}
.highlight-card {
  margin-bottom: 3rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2rem;
}
.image-placeholder {
  height: 200px;
  background-color: #ccc;
  position: relative;
  margin-bottom: 1rem;
}
.category-label {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #f6c2e1;
  color: #a53872;
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
}
.highlight-card h2 {
  font-size: 1.3rem;
  color: #6c2fbf;
}
.description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.3rem;
}
.teacher {
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
}
.meta {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.8rem;
  gap: 1rem;
}
.read-more {
  margin-left: auto;
  color: #e445ae;
  font-weight: bold;
  text-decoration: none;
}

/* Barra Laterale */
.sidebar {
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.search-box label,
.categories label {
  font-weight: bold;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  display: block;
}
.search-input {
  position: relative;
}
.search-input input {
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.categories ul {
  list-style: none;
  padding: 0;
}
.categories li {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.4rem;
}
.categories li.active {
  color: #6c2fbf;
  font-weight: bold;
}

/* Barra Laterale Nuova*/ 
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 350px;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-btn {
  background: #f0e6f8;
  color: #7e3f98;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.3s;
}

.filter-btn.active {
  background: #7e3f98;
  color: white;
}
</style>
