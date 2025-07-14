<template>
    <Header />
    <section id="classes-top" class="classes-hero">
    <Backbutton />
    <p class="classes-subtitle">• EXPLORE CLASSES •</p>
    <h1 class="classes-title">
      OUR <span class="highlight">CLASSES</span>
    </h1>
  </section>

  <section class="classes-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
      <span class="dash">—</span>
      <a href="#classes-top" class="current">OUR CLASSES</a>
    </nav>
  </section>

    <section class="classes-main">
    <!-- Barra di ricerca e filtri -->
    <div class="filter-bar">
      <input type="text" placeholder="Search classes..." class="search-input" v-model="search" />
      <div class="category-filters">
        <button
          v-for="(cat, i) in categories"
          :key="i"
          :class="['filter-btn', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="section-header">
      <p class="classes-subtitle">• FIND YOUR PATH •</p>
      <h2 class="classes-title">
        CHOOSE <span class="highlight">WHAT SUITS YOU</span>
      </h2>
    </div>
    <!-- Griglia delle classi disponibili -->
    <div class="class-grid">
      <div
        class="class-card"
        v-for="yogaClass in filteredNormalClasses"
        :key="yogaClass.id"
      >
        <img :src="yogaClass.image" :alt="yogaClass.title" class="class-img" />
        <h3>{{ yogaClass.title }}</h3>
        <p>{{ yogaClass.description }}</p>
        <div class="meta">
          <p>{{ yogaClass.time }}</p>
          <p>{{ yogaClass.days }}</p>
        </div>
        <NuxtLink
          class="btn-pink"
          :to="`/class?id=${yogaClass.id}`"
          v-if="yogaClass.id !== 6"
        >
        JOIN CLASS
        </NuxtLink>
      </div>
    </div>

    <div class="section-header">
      <p class="classes-subtitle">• WE SUGGEST •</p>
      <h2 class="classes-title">
        HIGHLIGHT <span class="highlight">CLASSES</span>
      </h2>
    </div>
    <!-- Griglia delle classi highlight -->
    <div class="class-grid">
      <div
        class="class-card"
        v-for="yogaClass in filteredHighlightClasses"
        :key="yogaClass.id"
      >
        <img :src="yogaClass.image" :alt="yogaClass.title" class="class-img" />
        <h3>{{ yogaClass.title }}</h3>
        <p>{{ yogaClass.description }}</p>
        <div class="meta">
          <p>{{ yogaClass.time }}</p>
          <p>{{ yogaClass.days }}</p>
        </div>
        <NuxtLink
          class="btn-pink"
          :to="`/class?id=${yogaClass.id}`"
          v-if="yogaClass.id !== 6"
        >
        JOIN CLASS
        </NuxtLink>
      </div>
    </div>

    <div class="class-grid">
  <div
    v-if="alwaysVisibleClass"
    class="class-card"
  >
    <img :src="alwaysVisibleClass.image" :alt="alwaysVisibleClass.title" class="class-img" />
    <h3>{{ alwaysVisibleClass.title }}</h3>
    <p>{{ alwaysVisibleClass.description }}</p>
    <div class="meta">
      <p>{{ alwaysVisibleClass.time }}</p>
      <p>{{ alwaysVisibleClass.days }}</p>
    </div>
    <NuxtLink to="/highlights" class="btn-pink">SEE HIGHLIGHTS</NuxtLink>
  </div>
</div>
  </section>
    
  <Footer />
</template>

<script setup>
// Qui posso inserire fetch dinamici da Supabase in futuro
import { ref, computed } from 'vue'

const search = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Stretching', 'Balance', 'Meditation', 'Seminar' ]

const allClasses = ref([
  {
    id: 1,
    title: 'STRETCHING YOGA',
    category: 'Stretching',
    description: 'Improve flexibility with guided stretching techniques.',
    time: '08:30 AM - 10:00 AM',
    days: 'Monday - Wednesday',
    image: '/stretching.png',
  },
  {
    id: 2,
    title: 'BODY BALANCE',
    category: 'Balance',
    description: 'Balance your body and mind in dynamic flow sessions.',
    time: '02:00 PM - 03:30 PM',
    days: 'Wednesday - Friday',
    image: '/balance.png',
  },
  {
    id: 3,
    title: 'MEDITATION YOGA',
    category: 'Meditation',
    description: 'Mindfulness and calmness through breathing and silence.',
    time: '08:30 AM - 10:00 AM',
    days: 'Friday - Sunday',
    image: '/meditation.png',
  },
  {
    id: 4,
    title: 'YOGA FOR THE MIND',
    category: 'Meditation',
    description: 'Yoga is the practice of quieting the mind you need to convince.',
    time: '08:30 AM - 10:00 AM',
    days: 'May 30, 2025',
    image: '/mindyoga.png',
  },
  {
    id: 5,
    title: 'YOGA TOGETHER',
    category: 'Seminar',
    description: 'Work together is essential for small teams challenge.',
    time: '01:30 PM - 03:30 PM',
    days: 'May 19, 2025',
    image: '/togetheryoga.png',
  },
  {
    id: 6,
    title: 'WANT TO SEE MORE?',
    category: 'All',
    description: 'Discover all our highlight classes by clicking on this.',
    time: 'Anytime!',
    days: 'Everyday!',
    image: '/discoverhighlights.png',
  }
])

const filteredNormalClasses = computed(() => {
  return allClasses.value.filter((cls) =>
    [1, 2, 3].includes(cls.id) &&
    (selectedCategory.value === 'All' || cls.category === selectedCategory.value) &&
    cls.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const filteredHighlightClasses = computed(() => {
  return allClasses.value.filter((cls) =>
    [4, 5].includes(cls.id) &&
    (selectedCategory.value === 'All' || cls.category === selectedCategory.value) &&
    cls.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const alwaysVisibleClass = computed(() => {
  return allClasses.value.find((cls) => cls.id === 6)
})
</script>

<style scoped>
.classes-hero {
  background-color: #f3e3fa;
  padding: 5rem 2rem 3rem;
  text-align: center;
}

.classes-subtitle {
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7e3f98;
  margin-bottom: 1rem;
}

.classes-title {
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

.classes-main {
  padding: 3rem 2rem;
  background: #fefcff;
  min-height: 100vh;
}

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

.class-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.class-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.class-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.class-card h3 {
  font-size: 1.1rem;
  color: #7e3f98;
  margin-bottom: 0.5rem;
}

.class-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.meta {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 1rem;
}

.btn-pink {
  background: #e91e63;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.85rem;
  display: inline-block;
  transition: background 0.3s;
}

.btn-pink:hover {
  background: #c3124d;
}
</style>