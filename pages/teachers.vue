<template>
    <div class="teachers-page">
    <Header />
    <section class="teachers-hero">
    <Backbutton />
    <p class="subtitle">• OUR TEAM •</p>
      <h1 class="title">MEET OUR <span class="highlight">YOGA TEACHERS</span></h1>
    </section>

    <!-- Breadcrumb -->
      <section class="classes-content">
      <nav class="breadcrumb">
        <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
        <span class="dash">–</span>
        <a href="#classes-top" class="current">Our Teachers</a>
      </nav>
      </section>

      <div class="intro-section">
        <div class="intro-text">
          <p class="section-subtitle">• WHO THEY ARE •</p>
          <h2 class="section-title">THE MINDS <span class="highlight">BEHIND YOUR PROGRESS</span></h2>
          <p class="intro-description">
            Our yoga teachers are more than instructors – they are mentors, guides, and wellness experts that shape your path with care and passion.
          </p>
          <h3 class="featured-name">ANNA LAURENT</h3>
          <p class="position">Head Teacher</p>
        </div>
        <div class="intro-image">
          <img src="/YogaTeacher.png" alt="Featured Teacher" />
        </div>
      </div>

    <!-- Sezione Insegnanti -->
    <section class="teachers-grid-section">
      <div class="section-header">
        <p class="subtitle">• OUR INSTRUCTORS •</p>
        <h2 class="title">IT’S ALL ABOUT <span class="highlight">THE PEOPLE</span></h2>
      </div>

      <div class="teachers-grid">
        <div v-for="(teacher, index) in teachers" :key="index" class="teacher-card">
          <img :src="teacher.image" :alt="teacher.name" />
          <h4>{{ teacher.name }}</h4>
          <p>{{ teacher.description }}</p>
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
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
// Qui posso inserire fetch dinamici da Supabase in futuro
const teachers = [
  {
    name: 'Laura Dover',
    image: '/YogaTeacher.png',
    description: 'Certified instructor specialized in flexibility and mindful breathing.',
  },
  {
    name: 'Anna Laurent',
    image: '/YogaTeacher1.png',
    description: 'Focused on balance, strength and positive mental habits.',
  },
  {
    name: 'Mark Willie',
    image: '/YogaTeacher2.png',
    description: 'Expert in guided meditation and body-mind integration.',
  },
  {
    name: 'Janet Hugh',
    image: '/YogaTeacher3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  }
]
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

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 1rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.teacher-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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