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
    <div v-if="pendingClasses">Loading classes...</div>
    <div v-else-if="errorClasses">Error loading classes.</div>
    <div v-else class="class-grid">
      <div
        class="class-card"
        v-for="yogaClass in filteredNormalClasses"
        :key="yogaClass.id"
      >
        <img :src="yogaClass.image_url" :alt="yogaClass.title" class="class-img" />
        <h3>{{ yogaClass.title }}</h3>
        <p>{{ yogaClass.description }}</p>
        <div class="meta">
          <p>{{ yogaClass.time }}</p>
          <p>{{ yogaClass.date }}</p>
        </div>
        <NuxtLink
          class="btn-pink"
          :to="`/classes/${yogaClass.id}`"
        >
        {{ yogaClass.cta }}
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
    <div v-if="pendingHighlights">Loading highlight classes...</div>
    <div v-else-if="errorHighlights">Error loading highlight classes.</div>
    <div v-else class="class-grid">
      <div
        class="class-card"
        v-for="yogaClass in filteredHighlightClasses"
        :key="yogaClass.id"
      >
        <img :src="yogaClass.image_url" :alt="yogaClass.title" class="class-img" />
        <h3>{{ yogaClass.title }}</h3>
        <p>{{ yogaClass.description }}</p>
        <div class="meta">
          <p>{{ yogaClass.time }}</p>
          <p>{{ yogaClass.date }}</p>
        </div>
        <NuxtLink
          class="btn-pink"
          :to="`/highlights/${yogaClass.id}`"
        >
        {{ yogaClass.cta }}
        </NuxtLink>
      </div>
    </div>

    <div class="class-grid">
    <div class="class-card">
    <img src="/discoverhighlights.png" alt="Discover Highlights" class="class-img" />
    <h3>WANT TO SEE MORE?</h3>
    <p>Discover all our highlight classes by clicking on this.</p>
    <div class="meta">
      <p>Anytime!</p>
      <p>Everyday!</p>
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

const client = useSupabaseClient()
const search = ref('')
const selectedCategory = ref('All')

// Filtri basati su campo "type"
const categories = [
  'All', 
  'Retreat', 
  'Meditation', 
  'Yoga', 
  'Fitness',
  'Nature',
  'Seminar',
  'Training',
  'Workshop' ]

  // Fetch classi da Supabase
const { data: allClasses, pending: pendingClasses, error: errorClasses } = await useAsyncData('all-classes', async () => {
  const { data, error } = await client
    .from('classes')
    .select('*') // seleziona i campi necessari (* li seleziona tutti)
    .order('date', { ascending: true })

  if (error) throw error
  return data
})

// Fetch classi highlight
const {
  data: highlightClasses,
  pending: pendingHighlights,
  error: errorHighlights
} = await useAsyncData('highlight-classes', async () => {
  const { data, error } = await client
    .from('highlight_classes')
    .select('*')
    .order('date', { ascending: true })

  if (error) throw error
  return data
})

// Computed classi filtrate
const filteredNormalClasses = computed(() => {
  if (!allClasses.value) return []
  return allClasses.value.filter((cls) => {
    const matchCategory =
      selectedCategory.value === 'All' || cls.type === selectedCategory.value
    const matchSearch = cls.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
    return matchCategory && matchSearch
  })
})

const filteredHighlightClasses = computed(() => {
  if (!highlightClasses.value) return []
  return highlightClasses.value.filter((cls) => {
    const matchCategory =
      selectedCategory.value === 'All' || cls.type === selectedCategory.value
    const matchSearch = cls.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
    return matchCategory && matchSearch
  })
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