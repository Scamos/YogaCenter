<template>
    <div class="teachers-page">
    <Header />
    <section class="teachers-hero">
    <Backbutton />
    <p class="subtitle">• OUR TEAM •</p>
      <h1 class="title">MEET OUR <span class="highlight">YOGA TEACHER</span></h1>
    </section>

    <!-- Breadcrumb -->
      <section class="classes-content">
      <nav class="breadcrumb">
        <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
        <span class="dash">–</span>
        <NuxtLink to="/teachers" class="breadcrumb-link">OUR TEACHERS</NuxtLink>
        <span class="dash">–</span>
        <a href="#classes-top" class="current">{{ teacher.name.split(' ')[0].toUpperCase() }} {{ teacher.surname.split(' ')[0].toUpperCase() }}</a>
      </nav>
      </section>

      <div class="intro-section">
        <div class="intro-text">
          <p class="section-subtitle">• {{ teacher.main_expertise[0]?.toUpperCase() }} EXPERT •</p>
          <h2 class="section-title">MEET <span class="highlight">{{ teacher.name.split(' ')[0].toUpperCase() }}</span></h2>
          <p class="intro-description">
            {{ teacher.brief_description }}
          </p>
          <h3 class="featured-name">{{ teacher.name.split(' ')[0].toUpperCase() }} {{ teacher.surname.split(' ')[0].toUpperCase() }}</h3>
          <p class="position">{{ teacher.main_expertise[0] }} Expert</p>
        </div>
        <div class="intro-image">
          <img :src="teacher.image_url" :alt="`${teacher.name} ${teacher.surname}`" />
        </div>
      </div>

      <section class="teacher-cv-section">
  <div class="cv-container">
    <!-- Informazioni del CV -->
    <div class="cv-info">
      <h2>Curriculum Information</h2>
      <div class="cv-item">
        <h4>EDUCATION</h4>
        <div v-if="teacher.education && teacher.education.length">
    <p
      v-for="(item, index) in formattedPairs(teacher.education)"
      :key="index"
    >
      {{ item }}
    </p>
  </div>
      </div>
      <div class="cv-item">
        <h4>MAIN EXPERTISE</h4>
        <div v-if="teacher.main_expertise?.length">
    <p v-for="(item, index) in formattedPairs(teacher.main_expertise)" :key="index">
      {{ item }}
    </p>
  </div>
      </div>
      <div class="cv-item">
        <h4>PERSONAL SKILLS</h4>
        <div v-if="teacher.personal_skills?.length">
    <p v-for="(item, index) in formattedPairs(teacher.personal_skills)" :key="index">
      {{ item }}
    </p>
  </div>
      </div>
      <div class="cv-item">
        <h4>LANGUAGES</h4>
        <div v-if="teacher.languages?.length">
    <p v-for="(item, index) in formattedPairs(teacher.languages)" :key="index">
      {{ item }}
    </p>
  </div>
      </div>
    </div>
    <div class="cv-item">
  <h4>WHY YOGA</h4>
  <div v-if="teacher.why_yoga?.length">
    <p v-for="(item, index) in formattedPairs(teacher.why_yoga)" :key="index">
      {{ item }}
    </p>
  </div>
</div>

    <!-- Immagine -->
    <div class="cv-image">
      <img :src="teacher.image_url" :alt="`${teacher.name} ${teacher.surname}`" />
    </div>
  </div>
</section>

<section class="teacher-classes-section">
  <p class="subtitle">CLASSES BY THIS TEACHER</p>
  <h2 class="title">WHAT I <span>TEACH</span></h2>

  <div v-if="teacherClasses?.length" class="classes-grid">
    <div 
    v-for="classItem in teacherClasses" 
    :key="classItem.id" 
    class="class-card"
    >
    <div 
      class="image" 
      :style="`background-image: url('${classItem.image_url}')`"
    ></div>
    <h3>{{ classItem.title }}</h3>
    <p>{{ classItem.description }}</p>
    <div class="meta">
      <p>{{ classItem.time }}</p>
      <p>{{ classItem.date }}</p>
    </div>
    <NuxtLink :to="`/classes/${classItem.id}`" class="btn-outline">{{ classItem.cta }}</NuxtLink>
    </div>
  </div>

  <div v-if="teacherHighlights?.length" class="classes-grid">
  <div 
    v-for="classItem in teacherHighlights" 
    :key="classItem.id" 
    class="class-card"
  >
    <div 
      class="image" 
      :style="`background-image: url('${classItem.image_url}')`"
    ></div>
    <h3>{{ classItem.title }}</h3>
    <p>{{ classItem.description }}</p>
    <div class="meta">
      <p>{{ classItem.time }}</p>
      <p>{{ classItem.date }}</p>
    </div>
    <NuxtLink :to="`/highlights/${classItem.id}`" class="btn-outline">
      {{ classItem.cta }}
    </NuxtLink>
  </div>
</div>

  <p v-if="teacherClasses?.length === 0" class="no-classes-msg">
  This teacher currently has no classes scheduled.
</p>
</section>

    <!-- Sezione Insegnanti -->
    <section class="teachers-grid-section">
      <div class="section-header">
        <p class="subtitle">• OUR INSTRUCTORS •</p>
        <h2 class="title">IT’S ALL ABOUT <span class="highlight">THE PEOPLE</span></h2>
      </div>

      <div class="teachers-grid">
  <NuxtLink
    v-for="t in allTeachers"
    :key="t.id"
    :to="`/teachers/${t.id}`"
    class="teacher-card teacher-card-link"
  >
    <img :src="t.image_url" :alt="`${t.name} ${t.surname}`" />
    <h4>{{ t.name }} {{ t.surname }}</h4>
    <p>{{ t.brief_description }}</p>
    <div class="social-icons">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </NuxtLink>
</div>
    </section>

    <!-- Sezione per i Contatti -->
    <section class="contact-promo">
      <div class="contact-content">
        <div class="contact-image">
          <img src="/Contact-Image.png" alt="Yoga Practice" />
        </div>
        <div class="contact-text">
          <h2>READY TO BEGIN YOUR JOURNEY?</h2>
          <p>Our teachers are ready to guide you toward your wellness goals. Don’t hesitate to reach out and discover more.</p>
          <NuxtLink to="/contact-us" class="btn-contact">CONTACT US</NuxtLink>
        </div>
      </div>
    </section>
    
  <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const client = useSupabaseClient()

// Teacher attuale
const { data: teacher, pending, error } = await useAsyncData('teacher', async () => {
  const { data, error } = await client
    .from('teachers')
    .select('*')
    .eq('id', route.params.id)
    .single()

  if (error) throw error
  return data
})

// Tutti gli insegnanti
const { data: allTeachers } = await useAsyncData('allTeachers', async () => {
  const { data, error } = await client
    .from('teachers')
    .select('*')
    .eq('id', route.params.id)

  if (error) throw error
  return data
})

function formattedPairs(arr) {
  const result = []
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i]
    const value = arr[i + 1] || ''
    const pair = `${key}: ${value}${i + 2 < arr.length ? ',' : ''}`
    result.push(pair)
  }
  return result
}

const { data: teacherClasses } = await useAsyncData('teacherClasses', async () => {
  const { data, error } = await client
    .from('classes')
    .select('*')
    .contains('teacher_id', [teacher.uuid])

  if (error) throw error
  return data
})

const { data: teacherHighlights } = await useAsyncData('teacherHighlights', async () => {
  const { data, error } = await client
    .from('highlight_classes')
    .select('*')
    .contains('teacher_id', [teacher.uuid])

  if (error) throw error
  return data
})
</script>

<style scoped>
.teachers-page {
  font-family: Arial, sans-serif;
  color: #4b2e83;
  background: #fff8fc;
}

.teachers-hero {
  background-color: #f3e3fa;
  padding: 5rem 2rem 3rem;
  text-align: center;
}

.subtitle {
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7e3f98;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #000;
}

.highlight {
  color: #e26aa5;
  font-weight: 500;
}

.section-header {
  text-align: center;
  margin: 3rem 1rem 2rem;
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
.intro-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;
  text-align: left;
}
.intro-text {
  max-width: 500px;
}
.section-subtitle {
  font-size: 0.85rem;
  color: #9024af;
  text-transform: uppercase;
}
.section-title {
  font-size: 2rem;
  margin: 0.5rem 0;
}
.intro-description {
  color: #666;
  margin-bottom: 1rem;
}
.featured-name {
  font-size: 1.5rem;
  color: #9024af;
  margin: 0;
}
.position {
  font-size: 0.85rem;
  color: #777;
}
.intro-image img {
  width: 300px;
  border-radius: 12px;
}

.teacher-cv-section {
  background-color: #4b2e83;
  color: white;
  padding: 4rem 2rem;
}

.cv-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.cv-info {
  flex: 1 1 400px;
}

.cv-info h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
}

.cv-item {
  margin-bottom: 1.5rem;
}

.cv-item h4 {
  font-size: 0.9rem;
  font-weight: bold;
  color: #f3cfff;
  margin-bottom: 0.3rem;
}

.cv-item p {
  font-size: 1rem;
  margin: 0;
  color: #fff;
}

.cv-image {
  flex: 1 1 300px;
  text-align: center;
}

.cv-image img {
  max-width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.teacher-classes-section {
  background: #f9f9f9;
  padding: 4rem 2rem;
  text-align: center;
}

.teacher-classes-section .subtitle {
  color: #999;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 600;
}

.teacher-classes-section .title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.teacher-classes-section .title span {
  color: #e24392;
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.class-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.class-card .image {
  background-size: cover;
  background-position: center;
  height: 160px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.class-card h3 {
  font-size: 1.2rem;
  color: #9024af;
  margin-bottom: 0.5rem;
}

.class-card p {
  color: #666;
  font-size: 0.9rem;
}

.class-card .meta {
  margin: 0.8rem 0;
  font-size: 0.85rem;
  color: #999;
}

.class-card .btn-outline {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #9024af;
  border-radius: 20px;
  color: #9024af;
  text-decoration: none;
  font-weight: 500;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 1rem 2rem 4rem;
  max-width: 400px;
  margin: 0 auto;
}

.teacher-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
}

.teacher-card-link {
  text-decoration: none;
  color: inherit;
}

.teacher-card-link:hover .teacher-card {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.teacher-card img {
  width: 100%;
  height: 180px;
  background: #ccc;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.teacher-card h4 {
  color: #9024af;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.teacher-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 0.5rem;
}

.social-icons i {
  color: #9024af;
  font-size: 1rem;
  cursor: pointer;
}

.contact-promo {
  background: #f0f0f0;
  padding: 3rem 2rem;
}
.contact-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.contact-image img {
  max-width: 400px;
  border-radius: 10px;
}
.contact-text {
  flex: 1;
}
.contact-text h2 {
  color: #9024af;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.contact-text p {
  color: #555;
  margin-bottom: 1.5rem;
}
.btn-contact {
  background: #e91e63;
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 20px;
  font-size: 0.9rem;
  text-decoration: none;
}

@media (max-width: 768px) {
  .teachers-grid {
    grid-template-columns: 1fr;
  }
  .intro-section,
  .contact-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>